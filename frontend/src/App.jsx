import { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { api, getToken, setToken } from "./api.js";
import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Topic from "./pages/Topic.jsx";
import Practice from "./pages/Practice.jsx";
import PracticeHub from "./pages/PracticeHub.jsx";
import Admin from "./pages/Admin.jsx";
import QuizPage from "./pages/QuizPage.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setReady(true);
      return;
    }
    api("/api/me")
      .then((d) => setUser(d.user))
      .catch(() => setToken(null))
      .finally(() => setReady(true));
  }, [loc.pathname]);

  if (!ready) return <div className="shell" style={{ padding: 40 }}>Lighting the path…</div>;

  return (
    <Routes>
      <Route path="/" element={<Landing user={user} />} />
      <Route path="/register" element={user ? <RedirectUser user={user} /> : <Register setUser={setUser} />} />
      <Route path="/login" element={user ? <RedirectUser user={user} /> : <Login setUser={setUser} />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route
        path="/*"
        element={
          !user ? (
            <Navigate to="/login" replace />
          ) : !user.profile?.onboardingComplete ? (
            <Routes>
              <Route path="/onboarding" element={<Onboarding user={user} setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/onboarding" replace />} />
            </Routes>
          ) : (
            <Studio user={user} setUser={setUser} />
          )
        }
      />
    </Routes>
  );
}

function RedirectUser({ user }) {
  return <Navigate to={user.profile?.onboardingComplete ? "/app" : "/onboarding"} replace />;
}

function Studio({ user, setUser }) {
  const nav = useNavigate();
  const [theme, setTheme] = useState(() => localStorage.getItem("pathlight_theme") || "dark");
  const [particles] = useState(() => Array.from({ length: 42 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 4}px`,
    duration: `${24 + Math.random() * 22}s`,
    delay: `-${Math.random() * 36}s`,
    drift: `${-60 + Math.random() * 120}px`,
    rise: `${60 + Math.random() * 120}px`,
  })));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pathlight_theme", theme);
  }, [theme]);

  function logout() {
    setToken(null);
    setUser(null);
    nav("/");
  }
  return (
    <div className="app-layout">
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle) => (
          <span
            className="floating-bubble"
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              "--bubble-drift": particle.drift,
              "--bubble-rise": particle.rise,
            }}
          />
        ))}
      </div>
      <aside className="side">
        <Link to="/admin" className="brand" style={{ marginBottom: 28 }}>
          <span className="mark" /> Pathlight
        </Link>
        <NavLink to="/app" end>
          Home
        </NavLink>
        <NavLink to="/app/roadmap">Roadmap</NavLink>
        <NavLink to="/app/practice">Practice</NavLink>
        <NavLink to="/app/profile">Profile</NavLink>
        <button className="btn ghost" style={{ marginTop: 24, width: "100%" }} onClick={logout}>
          Sign out
        </button>
      </aside>
      <div className="main">
        <div className="row space" style={{ marginBottom: 18 }}>
          <div>
            <div className="eyebrow">Studio</div>
            <div className="muted">Welcome back, {user.name.split(" ")[0]}</div>
          </div>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
        <Routes>
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/practice" element={<PracticeHub />} />
          <Route path="/app/roadmap" element={<Roadmap />} />
          <Route path="/app/topic/:slug" element={<Topic user={user} />} />
          <Route path="/app/quiz/:slug" element={<QuizPage />} />
          <Route path="/app/practice/:slug" element={<Practice />} />
          <Route path="/app/profile" element={<Profile user={user} />} />
          <Route path="/onboarding" element={<Navigate to="/app" replace />} />
          <Route path="*" element={<Navigate to="/app" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function Profile({ user }) {
  const p = user.profile;
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profile-page">
      <section className="profile-hero card">
        <div className="profile-avatar">{initials}</div>
        <div className="profile-identity">
          <div className="eyebrow">Learner profile</div>
          <h1 className="display">{user.name}</h1>
        </div>
        <span className="profile-status"><span /> Active learner</span>
      </section>

      <div className="profile-grid">
        <section className="profile-panel card">
          <div className="profile-panel-heading"><div><span className="kicker">Your path</span><h2>Learning snapshot</h2></div><span className="profile-panel-icon">✦</span></div>
          <div className="profile-stats">
            <div><span>DSA level</span><b>{formatLabel(p.dsaLevel)}</b></div>
            <div><span>Weekly pace</span><b>{formatLabel(p.pace)}</b></div>
            <div><span>Career track</span><b>{formatLabel(p.career)}</b></div>
            <div><span>Field</span><b>{formatLabel(p.field)}</b></div>
          </div>
        </section>

        <section className="profile-panel card">
          <div className="profile-panel-heading"><div><span className="kicker">Account</span><h2>Personal details</h2></div><span className="profile-panel-icon">◎</span></div>
          <div className="profile-details">
            <div><span>Email</span><b>{user.email}</b></div>
            <div><span>Mobile</span><b>{user.mobile}</b></div>
          </div>
          <div className="profile-languages"><span>Practice languages</span><div>{p.languages.map((language) => <span key={language}>{language}</span>)}</div></div>
        </section>
      </div>
    </div>
  );
}

function formatLabel(value) {
  return String(value || "Not set").replaceAll("_", " ");
}
