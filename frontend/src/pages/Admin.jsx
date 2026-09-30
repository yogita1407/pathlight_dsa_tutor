import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminApi, getAdminToken, setAdminToken } from "../api.js";

export default function Admin() {
  const [admin, setAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!getAdminToken()) return;
    adminApi("/api/admin/users")
      .then((data) => {
        setUsers(data.users);
        setAdmin({ authenticated: true });
      })
      .catch(() => setAdmin(null));
  }, []);

  async function login(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await adminApi("/api/admin/login", { method: "POST", body: form });
      setAdminToken(data.token);
      const usersData = await adminApi("/api/admin/users");
      setAdmin(data.admin);
      setUsers(usersData.users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setAdminToken(null);
    setAdmin(null);
    setUsers([]);
  }

  if (!admin) {
    return (
      <main className="auth-wrap">
        <section className="card auth-card">
          <div className="eyebrow">Restricted area</div>
          <h1 className="display">Admin portal</h1>
          <p className="muted">Review learner accounts and onboarding progress.</p>
          <form onSubmit={login}>
            {error && <div className="error">{error}</div>}
            <label htmlFor="admin-email">Admin email</label>
            <input id="admin-email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
            <label htmlFor="admin-password">Admin password</label>
            <input id="admin-password" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
            <button className="btn" style={{ marginTop: 20, width: "100%" }} disabled={loading}>
              {loading ? "Checking access..." : "Open portal"}
            </button>
            <p className="muted" style={{ marginTop: 16 }}>
              <Link to="/">← Return to Pathlight</Link>
            </p>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="shell admin-page">
      <div className="row space admin-header">
        <div>
          <div className="eyebrow">Admin portal</div>
          <h1 className="display">User accounts</h1>
          <p className="muted">{users.length} registered {users.length === 1 ? "learner" : "learners"}</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="/app" className="btn ghost">Studio</Link>
          <button className="btn ghost" onClick={logout}>Sign out</button>
        </div>
      </div>
      <section className="card admin-table-wrap">
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Joined</th>
                <th>Learning profile</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td><strong>{user.name}</strong><span className="table-subtle">ID #{user.id}</span></td>
                  <td>{user.email}<span className="table-subtle">{user.mobile}</span></td>
                  <td>{new Date(user.created_at).toLocaleDateString()}</td>
                  <td>
                    <span className="table-subtle">{user.career?.replaceAll("_", " ") || "Not set"}</span>
                    <span className="table-subtle">{user.dsa_level || "No level"} · {user.pace || "No pace"}</span>
                  </td>
                  <td><span className={user.onboarding_complete ? "status-pill ready" : "status-pill"}>{user.onboarding_complete ? "Onboarded" : "Pending"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <p className="muted admin-empty">No learner accounts yet.</p>}
        </div>
      </section>
    </main>
  );
}
