import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";

export default function Roadmap() {
  const [road, setRoad] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    setErr("");
    api("/api/roadmap").then(setRoad).catch((e) => setErr(e.message));
  }, []);

  if (err) return <div className="error">{err}</div>;
  if (!road) return <p>Drawing your path…</p>;
  const pct = Math.round((road.completed / Math.max(1, road.total)) * 100);

  return (
    <>
      <div className="row space">
        <div>
          <div className="eyebrow">Visual roadmap</div>
          <h1 className="display" style={{ fontSize: "2.5rem", margin: "6px 0" }}>
            {labelCareer(road.career)}
          </h1>
          <p className="muted">
            Prioritized for {road.field} · {road.weeks} week plan · {pct}% lit
          </p>
        </div>
      </div>
      <div className="card" style={{ margin: "18px 0 22px", padding: 8 }}>
        <svg viewBox="0 0 1000 90" width="100%" height="90">
          <defs>
            <linearGradient id="bar" x1="0" x2="1">
              <stop stopColor="#3ef0c4" />
              <stop offset="1" stopColor="#8b7cff" />
            </linearGradient>
          </defs>
          <rect x="20" y="38" width="960" height="8" rx="4" fill="#1a2236" />
          <rect x="20" y="38" width={9.6 * pct} height="8" rx="4" fill="url(#bar)" />
          {road.topics.map((t, i) => {
            const x = 20 + (960 * i) / Math.max(1, road.topics.length - 1);
            const done = t.status === "completed";
            const open = t.status !== "locked";
            return (
              <g key={t.id}>
                <circle cx={x} cy="42" r={done ? 9 : 7} fill={done ? "#3ef0c4" : open ? "#8b7cff" : "#2a3348"} />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="node-list">
        {road.topics.map((t, i) => {
          const locked = t.status === "locked";
          const inner = (
            <article className={`card station ${t.status}`}>
              <div className="badge">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="pri">Priority {t.priority} · {t.difficulty} · {t.estimated_hours}h</div>
                <h3 style={{ margin: "4px 0" }}>{t.title}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  {t.summary}
                </p>
              </div>
              <div className="muted" style={{ textTransform: "capitalize" }}>
                {locked ? "Locked" : t.status.replace("_", " ")}
              </div>
            </article>
          );
          return locked ? (
            <div key={t.id}>{inner}</div>
          ) : (
            <Link key={t.id} to={`/app/topic/${t.slug}`}>
              {inner}
            </Link>
          );
        })}
      </div>
    </>
  );
}

function labelCareer(id) {
  return id.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
