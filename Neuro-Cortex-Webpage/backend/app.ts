import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req, res) => {
  res.json({
    message: "EduGen Backend is running 🚀",
    status: "healthy",
    tech: "TypeScript + Express"
  });
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});