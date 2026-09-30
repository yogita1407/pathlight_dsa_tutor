import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";

export default function Dashboard() {
  const [road, setRoad] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    api("/api/roadmap")
      .then(setRoad)
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <div className="error">{err}</div>;
  if (!road) return <p>Loading studio…</p>;

  const next = road.topics.find((t) => t.status !== "completed" && t.status !== "locked") || road.topics.find((t) => t.status !== "locked");

  return (
    <>
      <h1 className="display" style={{ fontSize: "2.4rem", margin: 0 }}>
        Today’s light
      </h1>
      <p className="muted">
        {road.career.replaceAll("_", " ")} path · ~{road.weeks} weeks at {road.hoursPerWeek}h / week
      </p>
      <div className="stat-row">
        <div className="card stat">
          <span className="muted">Stations done</span>
          <b>
            {road.completed}/{road.total}
          </b>
        </div>
        <div className="card stat">
          <span className="muted">Hours on path</span>
          <b>{road.totalHours}h</b>
        </div>
        <div className="card stat">
          <span className="muted">Pace</span>
          <b style={{ textTransform: "capitalize" }}>{road.pace}</b>
        </div>
        <div className="card stat">
          <span className="muted">Level</span>
          <b style={{ textTransform: "capitalize" }}>{road.dsaLevel}</b>
        </div>
      </div>
      {next && (
        <div className="card" style={{ padding: 24, display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
          <div>
            <div className="eyebrow">Continue</div>
            <h2 className="display" style={{ margin: "6px 0" }}>
              {next.title}
            </h2>
            <p className="muted">{next.summary}</p>
          </div>
          <Link className="btn" to={`/app/topic/${next.slug}`}>
            Open lesson
          </Link>
        </div>
      )}
      <p style={{ marginTop: 28 }}>
        <Link className="btn violet" to="/app/roadmap">
          View full constellation
        </Link>
      </p>
    </>
  );
}
