import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api.js";

export default function Onboarding({ user, setUser }) {
  const nav = useNavigate();
  const [meta, setMeta] = useState(null);
  const [form, setForm] = useState({
    languages: [],
    field: "",
    career: "",
    dsaLevel: "",
    pace: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    api("/api/meta").then(setMeta).catch((err) => setError(err.message));
  }, []);

  function toggleLang(l) {
    setForm((f) => ({
      ...f,
      languages: f.languages.includes(l) ? f.languages.filter((x) => x !== l) : [...f.languages, l],
    }));
  }

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const data = await api("/api/profile", { method: "PUT", body: form });
      setUser(data.user);
      nav("/app/roadmap");
    } catch (err) {
      setError(err.message);
    }
  }

  if (!meta) return <p>Loading compass…</p>;

  return (
    <div className="shell" style={{ padding: "40px 16px 80px" }}>
      <div className="eyebrow">Step 2 of 2</div>
      <h1 className="display" style={{ fontSize: "2.6rem" }}>
        Point the compass, {user.name.split(" ")[0]}
      </h1>
      <p className="muted">Your field and career change topic order. Pace changes how many stations unlock at once.</p>
      <form onSubmit={submit} className="card" style={{ padding: 28, marginTop: 20 }}>
        {error && <div className="error">{error}</div>}
        <label>Languages you know</label>
        <div className="chip-wrap">
          {meta.languages.map((l) => (
            <button type="button" key={l} className={"chip" + (form.languages.includes(l) ? " on" : "")} onClick={() => toggleLang(l)}>
              {l}
            </button>
          ))}
        </div>
        <label>Field of study</label>
        <div className="chip-wrap">
          {meta.fields.map((l) => (
            <button type="button" key={l} className={"chip" + (form.field === l ? " on" : "")} onClick={() => setForm({ ...form, field: l })}>
              {l}
            </button>
          ))}
        </div>
        <label>Career goal</label>
        <div className="grid-2" style={{ marginTop: 8 }}>
          {meta.careers.map((c) => (
            <button type="button" key={c.id} className={"choice" + (form.career === c.id ? " on" : "")} onClick={() => setForm({ ...form, career: c.id })}>
              <b>{c.label}</b>
              <div className="muted">{c.blurb}</div>
            </button>
          ))}
        </div>
        <label>DSA knowledge</label>
        <div className="grid-3">
          {meta.dsaLevels.map((c) => (
            <button type="button" key={c.id} className={"choice" + (form.dsaLevel === c.id ? " on" : "")} onClick={() => setForm({ ...form, dsaLevel: c.id })}>
              <b>{c.label}</b>
              <div className="muted">{c.blurb}</div>
            </button>
          ))}
        </div>
        <label>Pace of study</label>
        <div className="grid-3">
          {meta.pace.map((c) => (
            <button type="button" key={c.id} className={"choice" + (form.pace === c.id ? " on" : "")} onClick={() => setForm({ ...form, pace: c.id })}>
              <b>{c.label}</b>
              <div className="muted">{c.blurb}</div>
            </button>
          ))}
        </div>
        <button className="btn" style={{ marginTop: 24 }}>
          Generate my visual roadmap
        </button>
      </form>
    </div>
  );
}
