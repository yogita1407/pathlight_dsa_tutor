import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing({ user }) {
  const cta = user?.profile?.onboardingComplete ? "/app" : user ? "/onboarding" : "/register";
  const [theme, setTheme] = useState(() => localStorage.getItem("pathlight_theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pathlight_theme", theme);
  }, [theme]);

  return (
    <>
      <header className="topbar">
        <div className="shell inner">
          <Link to="/admin" className="brand">
            <span className="mark" /> Pathlight
          </Link>
          <nav className="nav-links">
            <a href="#how">How it works</a>
            {user ? (
              <Link to={cta}>Open studio</Link>
            ) : (
              <>
                <Link to="/login">Sign in</Link>
                <Link to="/register" className="btn">
                  Start learning
                </Link>
              </>
            )}
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </nav>
        </div>
      </header>
      <main className="shell">
        <section className="hero">
          <div>
            <div className="eyebrow">Career-aware DSA studio</div>
            <h1 className="display">A glowing path through data structures — taught, then practiced, never spoiled.</h1>
            <p className="muted" style={{ fontSize: "1.15rem", maxWidth: 560 }}>
              Tell Pathlight who you are. Get a visual roadmap tuned to your field and goal. Watch beginner-friendly
              lessons, then solve drills with a tutor that asks better questions instead of dumping the answer.
            </p>
            <div className="row" style={{ marginTop: 24 }}>
              <Link to={cta} className="btn">
                Build my roadmap
              </Link>
              <Link to="/login" className="btn ghost">
                I already have an account
              </Link>
            </div>
          </div>
          <div className="hero-card hero-visual">
            <svg className="path-preview" viewBox="0 0 360 380" fill="none">
              <path
                d="M40 40 C 80 90, 40 130, 90 170 S 200 210, 160 260 S 80 320, 180 350"
                stroke="url(#g)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="var(--mint)" />
                  <stop offset="1" stopColor="var(--violet)" />
                </linearGradient>
              </defs>
              {[
                [40, 40, "Arrays"],
                [72, 120, "Hash"],
                [120, 185, "Recursion"],
                [168, 255, "Trees"],
                [180, 350, "Graphs"],
              ].map(([x, y, label], i) => (
                <g key={label}>
                  <circle cx={x} cy={y} r="16" fill="var(--hero-node)" stroke={i < 3 ? "var(--mint)" : "var(--violet)"} strokeWidth="3" />
                  <text x={x + 26} y={y + 5} fill="var(--hero-label)" fontSize="14" fontFamily="Outfit">
                    {label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </section>
        <section id="how" className="grid-3" style={{ margin: "12px 0 48px" }}>
          {[
            ["01  Compass", "Languages, field, career, DSA level, and pace live in your profile — the map is not generic."],
            ["02  Stations", "Each node is a lesson: lecture notes plus trusted references written for a first-time learner."],
            ["03  Studio", "LeetCode-style drills. Hints and Socratic questions. The full solution stays locked in your brain."],
          ].map(([t, b]) => (
            <article key={t} className="card feature">
              <div className="kicker">{t.split("  ")[0]}</div>
              <h3>{t.split("  ")[1]}</h3>
              <p className="muted">{b}</p>
            </article>
          ))}
        </section>
      </main>
      <footer className="site shell">Pathlight · learn by walking the path, not by copying it.</footer>
    </>
  );
}
