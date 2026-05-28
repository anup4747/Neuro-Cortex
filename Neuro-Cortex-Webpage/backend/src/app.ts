import express from 'express';
import dotenv from 'dotenv';
import { defineConfig, env } from "prisma/config";

dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

const app = express();
const PORT = process.env.PORT || 5000;

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