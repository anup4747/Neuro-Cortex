# Neuro Cortex

OPUS / Neuro Cortex — pentesting assistant and desktop client (OPUS Desktop) with a privacy-focused web portal.

This repository contains two primary workspaces:

- `Neuro-Cortex-Desktop/` — Electron + backend for the desktop app
- `Neuro-Cortex-Webpage/` — Web landing site and frontend for access/feedback flows

## Quick overview

- The web frontend provides marketing pages, feedback, and an access request modal. Authentication leads users to open the desktop client — the web portal intentionally avoids showing usage or sensitive user data.
- The backend provides lightweight Express routes that forward to Supabase for persistence: request access, feedback, login, health.
- Database schema (Postgres / Supabase) includes `users`, `access_requests`, `feedback`, `pentesting_chats`, and `pentesting_messages` with UUID primary keys and updated_at triggers.

## File layout

- Neuro-Cortex-Desktop/
  - `backend/` — desktop backend (Electron server code)
  - `electron/` — electron main process
  - `frontend/` — desktop UI (React + Vite)

- Neuro-Cortex-Webpage/
  - `frontend/` — public web frontend (React + Vite)
  - `backend/` — Express API that uses `@supabase/supabase-js`

## Requirements

- Node.js 18+ (recommended)
- npm
- Supabase project (for production persistence)

## Backend (webpage) — setup

1. Copy environment example and fill values:

```bash
cp Neuro-Cortex-Webpage/backend/.env.example Neuro-Cortex-Webpage/backend/.env
# Fill SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
```

2. Install and run:

```bash
cd Neuro-Cortex-Webpage/backend
npm install
npm run dev
```

API endpoints (Express -> Supabase):
- `GET /api/status` — health
- `POST /api/request-access` — create an access request
- `POST /api/feedback` — submit feedback
- `POST /api/login` — forward credentials to Supabase auth (sign-in)

Note: The backend expects valid Supabase keys. Use the `SERVICE_ROLE` key only on trusted servers.

## Frontend (webpage) — setup

```bash
cd Neuro-Cortex-Webpage/frontend
npm install
npm run dev
# build for production
npm run build
```

The web UI uses React 18 and components:
- `src/components/AccessRequestModal.tsx` — modal form that POSTs to `/api/request-access`
- `src/components/FeedbackSection.tsx` — POSTs to `/api/feedback`
- `src/components/LoginPage.tsx` — POSTs to `/api/login`

## Desktop workspace

Open `Neuro-Cortex-Desktop/` to run/build the Electron desktop app. It uses a separate frontend/backend under the `Neuro-Cortex-Desktop` folder.

## Database Schema

The production Postgres schema (recommended to run in Supabase) includes tables:
- `users` — application users
- `access_requests` — incoming access requests
- `feedback` — user feedback
- `pentesting_chats` — pentest session metadata
- `pentesting_messages` — chat messages

Triggers keep `updated_at` current. Use the schema file in project notes or the SQL snippets included in the conversation history.

## Security notes

- The web portal intentionally minimizes collection/exposure of usage data. Keep the service-role key on the server only.
- Add rate limiting, input validation, and bot protection (reCAPTCHA/hcaptcha) before public deployment.

## Next steps (suggested)

- Add server-side validation and rate-limiting middleware
- Add admin UI to review `access_requests` and `feedback`
- Add notification (email/Slack) on new access requests

---

If you want, I can: wire email notifications, add validation, or scaffold the admin interface to review requests. Which would you like next?
