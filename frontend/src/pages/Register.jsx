import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setToken } from "../api.js";

export default function Register({ setUser }) {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", mobile: "" });
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const data = await api("/api/auth/register", { method: "POST", body: form });
      setToken(data.token);
      setUser(data.user);
      nav("/onboarding");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <AuthFrame title="Create your Pathlight">
      <form onSubmit={submit}>
        {error && <div className="error">{error}</div>}
        <label>Full name</label>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <label>Email</label>
        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <label>Password</label>
        <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={6} />
        <label>Mobile</label>
        <input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />
        <button className="btn" style={{ marginTop: 20, width: "100%" }}>
          Continue to compass
        </button>
        <p className="muted" style={{ marginTop: 16 }}>
          Already enrolled? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </AuthFrame>
  );
}

export function AuthFrame({ title, subtitle, children }) {
  return (
    <>
      <header className="topbar">
        <div className="shell inner">
          <Link to="/admin" className="brand">
            <span className="mark" /> Pathlight
          </Link>
        </div>
      </header>
      <div className="auth-wrap">
        <div className="card auth-card">
          <div className="eyebrow">Account</div>
          <h1 className="display" style={{ fontSize: "2rem" }}>
            {title}
          </h1>
          {subtitle && <p className="muted">{subtitle}</p>}
          {children}
        </div>
      </div>
    </>
  );
}
