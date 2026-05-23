const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn(
    "Missing SUPABASE_* environment variables. API will not function without them.",
  );
}

// Admin client for DB inserts (service role)
const supabaseAdmin = createClient(
  SUPABASE_URL || "",
  SUPABASE_SERVICE_ROLE_KEY || "",
);
// Auth client for sign-in flows (anon key)
const supabaseAuth = createClient(SUPABASE_URL || "", SUPABASE_ANON_KEY || "");

app.get("/", (req, res) => {
  res.json({ message: "Neuro-Cortex backend running" });
});

// Health
app.get("/api/status", (req, res) => {
  res.json({ ok: true });
});

// Request access endpoint
app.post("/api/request-access", async (req, res) => {
  const {
    user_name,
    user_email,
    company_name,
    request_type,
    expected_usage,
    message,
    app_version,
  } = req.body;
  if (!user_name || !user_email || !request_type || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const payload = {
      user_name,
      user_email,
      company_name: company_name || null,
      request_type,
      expected_usage: expected_usage || null,
      message,
      app_version: app_version || null,
    };

    const { data, error } = await supabaseAdmin
      .from("access_requests")
      .insert([payload])
      .select();
    if (error) throw error;
    res.json({ ok: true, request: data[0] });
  } catch (err) {
    console.error("request-access error", err);
    res.status(500).json({ error: "Failed to save request" });
  }
});

// Feedback endpoint
app.post("/api/feedback", async (req, res) => {
  const {
    user_id,
    user_name,
    user_email,
    rating,
    comment,
    page_section,
    app_version,
    device_info,
  } = req.body;
  if (!comment) return res.status(400).json({ error: "Comment is required" });

  try {
    const payload = {
      user_id: user_id || null,
      user_name: user_name || null,
      user_email: user_email || null,
      rating: rating || null,
      comment,
      page_section: page_section || null,
      app_version: app_version || null,
      device_info: device_info || null,
    };

    const { data, error } = await supabaseAdmin
      .from("feedback")
      .insert([payload])
      .select();
    if (error) throw error;
    res.json({ ok: true, feedback: data[0] });
  } catch (err) {
    console.error("feedback error", err);
    res.status(500).json({ error: "Failed to save feedback" });
  }
});

// Login endpoint - forwards to Supabase auth
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  try {
    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return res.status(401).json({ error: error.message });
    }
    res.json({ ok: true, session: data });
  } catch (err) {
    console.error("login error", err);
    res.status(500).json({ error: "Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
