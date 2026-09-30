import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setToken } from "../api.js";
import { AuthFrame } from "./Register.jsx";

export default function Login({ setUser }) {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const data = await api("/api/auth/login", { method: "POST", body: form });
      setToken(data.token);
      setUser(data.user);
      nav(data.user.profile?.onboardingComplete ? "/app" : "/onboarding");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <AuthFrame title="Welcome back" subtitle="Pick up your roadmap exactly where you left the last station.">
      <form onSubmit={submit}>
        {error && <div className="error">{error}</div>}
        <label>Email</label>
        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <label>Password</label>
        <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button className="btn" style={{ marginTop: 20, width: "100%" }}>
          Enter studio
        </button>
        <p className="muted" style={{ marginTop: 16 }}>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </AuthFrame>
  );
}
