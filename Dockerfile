# --- Build the frontend ---
FROM node:22-slim AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- Runtime: backend serves API + the built frontend ---
FROM node:22-slim AS runtime
WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev
RUN apt-get update && apt-get install -y openjdk-17-jdk-headless python3 python3-pip g++ && rm -rf /var/lib/apt/lists/*
COPY backend/ ./backend/
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

ENV NODE_ENV=production
ENV PORT=10000
EXPOSE 10000

WORKDIR /app/backend
CMD ["node", "src/index.js"]
