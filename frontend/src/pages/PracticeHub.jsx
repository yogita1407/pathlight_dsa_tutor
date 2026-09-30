import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api.js";

export default function PracticeHub() {
  const [meta, setMeta] = useState(null);
  const [career, setCareer] = useState("");
  const [company, setCompany] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [problems, setProblems] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    api("/api/meta").then(setMeta).catch(() => setMeta({ careers: [] }));
  }, []);

  useEffect(() => {
    fetchProblems();
  }, []);

  async function fetchProblems() {
    setErr("");
    try {
      const q = new URLSearchParams();
      if (company.trim()) q.set("company", company.trim());
      if (career) q.set("career", career);
      if (difficulty) q.set("difficulty", difficulty);
      const d = await api(`/api/problems?${q.toString()}`);
      setProblems(d.problems || []);
    } catch (e) {
      setErr(e.message);
    }
  }

  function onApply(e) {
    e.preventDefault();
    fetchProblems();
  }

  return (
    <>
      <div className="row space">
        <div>
          <div className="eyebrow">Practice</div>
          <h1 className="display" style={{ fontSize: "2.2rem", margin: 0 }}>
            Drill selection
          </h1>
          <p className="muted">Pick a career or company to surface targeted interview drills.</p>
        </div>
      </div>

      <form className="card" style={{ padding: 16, marginBottom: 18 }} onSubmit={onApply}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <label className="muted">Career goal</label>
            <select value={career} onChange={(e) => setCareer(e.target.value)} style={{ width: "100%" }}>
              <option value="">(any)</option>
              {meta?.careers?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div style={{ width: 180 }}>
            <label className="muted">Difficulty</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={{ width: "100%" }}>
              <option value="">(any)</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="muted">Company (comma-separated)</label>
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="google, amazon" />
          </div>
          <div>
            <label style={{ visibility: "hidden" }}>apply</label>
            <button className="btn violet" type="submit">
              Apply
            </button>
          </div>
        </div>
      </form>

      {err && <div className="error">{err}</div>}

      <div className="node-list">
        {!problems && <p>Loading drills…</p>}
        {problems && problems.length === 0 && <p className="muted">No problems found for those filters.</p>}
        {problems &&
          problems.map((p) => (
            <Link key={p.slug} to={`/app/practice/${p.slug}`}>
              <article className="card station">
                <div className="badge">PR</div>
                <div>
                  <div className="pri">{p.difficulty}</div>
                  <h3 style={{ margin: "4px 0" }}>{p.title}</h3>
                  <p className="muted" style={{ margin: 0 }}>
                    {p.topic || ""}
                  </p>
                </div>
                <div className="muted">•</div>
              </article>
            </Link>
          ))}
      </div>
    </>
  );
}
