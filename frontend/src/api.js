import { useState } from "react";

const TOKEN = "pathlight_token";
const ADMIN_TOKEN = "pathlight_admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function setToken(t) {
  if (t) localStorage.setItem(TOKEN, t);
  else localStorage.removeItem(TOKEN);
}

export function getAdminToken() {
  return localStorage.getItem(ADMIN_TOKEN);
}

export function setAdminToken(t) {
  if (t) localStorage.setItem(ADMIN_TOKEN, t);
  else localStorage.removeItem(ADMIN_TOKEN);
}

export async function api(path, { method = "GET", body } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export async function adminApi(path, { method = "GET", body } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getAdminToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export function useAuthUser() {
  const [user, setUser] = useState(null);
  return { user, setUser };
}
