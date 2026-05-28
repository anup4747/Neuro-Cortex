import express from 'express';
import dotenv from 'dotenv';
import {createClient} from "@supabase/supabase-js" 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB setup
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth:{
    autoRefreshToken: true,
    persistSession: true,
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req, res) => {
  res.json({
    message: "Neuro-Cortex Backend is running",
    status: "healthy",
    tech: "TypeScript + Express"
  });
});

app.get('/test-supabase', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('pg_tables')
      .select('tablename')
      .limit(1);

    if (error) throw error;

    res.json({
      success: true,
      message: "Supabase connected successfully!",
      tables: data
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Supabase connection failed",
      error: err.message
    });
  }
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

// db connection 

// Login 

// download .exe 

// desktop authentication 

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});