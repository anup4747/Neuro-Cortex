# Neuro-Cortex Webpage

Neuro-Cortex is a simulated Cyber Security Threat Intelligence platform. This repository contains the source code for the **Neuro-Cortex Webpage**, which serves as the public-facing landing site, marketing portal, and access request gateway for the platform.

The project is split into a **Frontend** (React + Vite) and a **Backend** (Node.js + Express).

---

## 🚀 Quick Start Guide

To get the Neuro-Cortex webpage running locally on your machine, you'll need to set up and run both the backend and frontend development servers.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (Node Package Manager)

---

## 🛠️ 1. Backend Setup

The backend is built with Node.js, Express, and TypeScript. It handles API requests from the frontend (like access requests, feedback submissions, and login/signup flows).

1. **Navigate to the backend directory:**
   ```bash
   cd Neuro-Cortex-Webpage/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `backend` directory (you can use `.env.example` as a reference if available). You will need to provide your database/Supabase credentials:
   ```env
   # Example .env configuration
   PORT=3000
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   DATABASE_URL=supabase-db-url

   ```

4. **Database Setup & Migrations (Prisma):**
   The backend uses Prisma as the ORM to interact with your Supabase database. Before starting the server, ensure your database schema is synced.

   Pushing the schema your database, run:

   ```bash
   npx prisma db push
   ```
   
   Then, generate the Prisma Client for your code:

   ```bash
   npx prisma generate
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The backend should now be running on `http://localhost:3000`. It will automatically restart on file changes using Nodemon.*

---

## 🎨 2. Frontend Setup

The frontend is a modern, responsive web application built using React, Vite, Tailwind CSS, and Framer Motion for sleek, futuristic animations.

1. **Navigate to the frontend directory:**
   Open a **new** terminal window and run:
   ```bash
   cd Neuro-Cortex-Webpage/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The frontend should now be running! Vite will output the exact local URL in your terminal (typically `http://localhost:5173`).*

---

## 📂 Project Structure

```text
Neuro-Cortex-Webpage/
├── backend/                  # Node.js + Express API
│   ├── src/
│   │   ├── app.ts            # Main application entry point
│   │   └── ...               # API routes and controllers
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/                 # React + Vite Client
    ├── src/
    │   ├── components/       # Reusable UI components (Navbar, CTA, Access Modal)
    │   ├── pages/            # Page components (Login, Signup, Dashboard)
    │   ├── App.tsx           # Main landing page layout
    │   └── main.tsx          # React Router configuration & React entry point
    ├── index.html
    ├── tailwind.config.js    # Tailwind CSS configuration
    └── package.json
```
