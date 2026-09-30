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

COPY backend/ ./backend/
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

ENV NODE_ENV=production
ENV PORT=4000
EXPOSE 4000

WORKDIR /app/backend
CMD ["node", "src/index.js"]
