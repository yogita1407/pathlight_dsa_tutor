# Pathlight — DSA Tutor

A full-stack study studio: accounts in SQLite, a career-aware visual roadmap, beginner lessons with structured notes and references, LeetCode-style drills, and a Socratic tutor that refuses to dump solutions.

**Stack:** React + Vite (frontend) · Express + Node's built-in SQLite (backend) · JWT auth · zero native dependencies, so it runs anywhere Node runs.

## Run locally

You need Node.js **22.5+** (for the built-in `node:sqlite` module).

```bash
npm run install:all
cp backend/.env.example backend/.env   # then edit the values
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

- Web: Vite on port 5173 (proxies `/api` to the backend)
- API: Express on port 4000
- Database: SQLite file at `backend/data/dsa-tutor.db` (created and seeded automatically on first run)

## What you get

1. **Register / login** — name, email, password (hashed), mobile
2. **Compass** — languages, field of study, career goal, DSA level, pace
3. **Roadmap** — topic order and unlocks depend on career + level + pace
4. **Lessons** — structured notes and official reference links
5. **Studio** — write `solve(...)`, run tests (JavaScript always works out of the box; Python/Java/C++ work too if those toolchains are installed on the server — see note below)
6. **Tutor** — hints and questions, not finished code. Set `OPENAI_API_KEY` in `backend/.env` for a richer model; otherwise a local tutor still works.

## Layout

```
frontend/   React + Vite
backend/    Express + SQLite (node:sqlite, no native build step)
```

## Admin portal

Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env`, then open [http://localhost:5173/admin](http://localhost:5173/admin) (or click the "Pathlight" logo, which is the entry point to `/admin`). The portal lists user account and onboarding details, but never exposes passwords or password hashes.

## Deployment notes

This project is configured for local development by default. If you want to host it elsewhere later, use your own container or platform setup and supply the same environment variables described in the local run instructions.

## Notes on this rewrite

This project originally used `better-sqlite3`, which ships a compiled binary per OS/architecture — convenient locally, but it broke the moment the code moved to a different machine (the classic "works on my machine" native-module trap). It's been swapped for Node's built-in `node:sqlite` module, which has no native binary to manage and needs no build tools on the deploy host.
