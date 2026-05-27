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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
