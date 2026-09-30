import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api.js";

export default function Practice() {
  const { slug } = useParams();
  const [p, setP] = useState(null);
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState("");
  const [results, setResults] = useState(null);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [asking, setAsking] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setErr("");
    api(`/api/problems/${slug}`)
      .then((d) => {
        setP(d);
        setChat(d.chat || []);
        const starters = d.starters || {};
        const preferred = d.preferredLanguage && starters[d.preferredLanguage]
          ? d.preferredLanguage
          : pickLang(starters);
        setLang(preferred);
        setCode(starters[preferred] || "");
        setResults(null);
      })
      .catch((e) => setErr(e.message));
  }, [slug]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, asking]);

  const failed = useMemo(() => (results ? results.filter((r) => !r.passed).length : 0), [results]);

  function changeLang(next) {
    if (!p?.starters) return;
    setLang(next);
    setCode(p.starters[next] || "");
    setResults(null);
    setErr("");
  }

  function handleKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const nextCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(nextCode);
      requestAnimationFrame(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      });
    }
  }

  async function submit() {
    setErr("");
    setBusy(true);
    setResults(null);
    try {
      const data = await api(`/api/problems/${slug}/submit`, { method: "POST", body: { language: lang, code } });
      setResults(data.results);
      if (data.passed) setP((prev) => ({ ...prev, solved: true }));
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  async function ask(e) {
    e.preventDefault();
    if (!msg.trim() || asking) return;
    const text = msg.trim();
    setMsg("");
    setChat((c) => [...c, { role: "user", content: text }]);
    setAsking(true);
    try {
      const data = await api(`/api/problems/${slug}/tutor`, {
        method: "POST",
        body: { message: text, code, failedTests: failed },
      });
      setChat((c) => [...c, { role: "tutor", content: data.reply }]);
    } catch (e) {
      setErr(e.message);
    } finally {
      setAsking(false);
    }
  }

  if (err && !p) return <div className="error">{err}</div>;
  if (!p) return <p>Loading drill…</p>;
  const topicTitle = p.topic?.title || "Topic";
  const topicSlug = p.topic?.slug || "";
  const videoUrl = p.videoUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(`${p.title} ${topicTitle} algorithm tutorial`)}`;
  const constraintsList = Array.isArray(p.constraints) ? p.constraints : p.constraints ? [p.constraints] : [];

  return (
    <div className="practice-page">
      <div className="practice-topbar">
        <Link to={`/app/topic/${topicSlug}`} className="practice-back">← {topicTitle}</Link>
        <span className="practice-progress">Problem workspace</span>
      </div>
      <div className="practice-heading">
        <div><div className="problem-number">{p.difficulty} problem</div><h1>{p.title}</h1></div>
        <span className={"solve-state" + (p.solved ? " complete" : "")}><span className="state-dot" /> {p.solved ? "Solved" : "Unsolved"}</span>
      </div>
      <div className="practice-workspace">
        <div className="question-coding">
          <section className="problem-pane">
            <div className="problem-section"><h2><span>1</span>Description</h2><div className="problem-prompt" dangerouslySetInnerHTML={{ __html: p.prompt }} /></div>
            <div className="problem-section">
              <h2><span>2</span>Constraints</h2>
              {constraintsList.length > 0 ? (
                <ul style={{ margin: "6px 0 0 16px", padding: 0 }}>
                  {constraintsList.map((c, i) => (
                    <li key={i} className="constraint-copy" style={{ marginBottom: 4 }}>{c}</li>
                  ))}
                </ul>
              ) : (
                <p className="constraint-copy">Standard interview time and memory constraints apply.</p>
              )}
            </div>
            <div className="problem-section">
              <h2><span>3</span>Examples</h2>
              <div className="examples">
                {(p.examples || []).map((ex, i) => (
                  <div className="example" key={i}>
                    <b>Example {i + 1}</b>
                    <pre>Input: {ex.input}{"\n"}Output: {ex.output}{ex.explanation ? `\nExplanation: ${ex.explanation}` : ""}</pre>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="editor-pane">
            <div className="editor-toolbar">
              <span className="editor-title"><span className="section-number">4</span>Code area</span>
              <div className="language-tabs">
                {Object.keys(p.starters || {}).map((k) => (
                  <button key={k} type="button" className={lang === k ? "active" : ""} onClick={() => changeLang(k)}>
                    {k}
                  </button>
                ))}
              </div>
            </div>
            <div className="editor-label">{lang} · {getSignature(code, lang)}</div>
            <textarea
              className="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              aria-label="Code editor"
            />
            {err && <div className="error">{err}</div>}
            <div className="editor-actions">
              <span className="muted">Run against all test cases</span>
              <button className="btn" disabled={busy} onClick={submit}>
                {busy ? "Running…" : "Run code"}
              </button>
            </div>
            {results && (
              <div className="results-panel">
                <div className="results-heading">
                  <b>{results.every((r) => r.passed) ? "Accepted" : "Try again"}</b>
                  <span>{results.filter((r) => r.passed).length}/{results.length} passed</span>
                </div>
                {results.map((r, i) => (
                  <div key={i} className={"test " + (r.passed ? "ok" : "bad")}>
                    <span>{r.passed ? "✓" : "×"}</span> {r.label || `Test case ${i + 1}`}
                    {r.msg ? (
                      <small style={{ whiteSpace: "pre-wrap", display: "block", marginTop: "4px" }}>{r.msg}</small>
                    ) : (
                      <small>Expected {JSON.stringify(r.expected)} · Got {JSON.stringify(r.got)}</small>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
        <section className="tutor-section">
          <div className="tutor-heading">
            <span className="tutor-spark">✦</span>
            <div>
              <h2>Pathlight tutor</h2>
              <p>Ask for a hint when you are stuck. I will guide, not paste.</p>
            </div>
          </div>
          <div className="chat">
            {chat.map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>
                <b>{m.role === "tutor" ? "Tutor" : "You"} · </b>{m.content}
              </div>
            ))}
            {asking && (
              <div className="bubble tutor">
                <b>Tutor · </b><i>Thinking through your approach…</i>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={ask} className="tutor-form">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ask about your approach..."
              disabled={asking}
            />
            <button className="btn ghost" disabled={asking || !msg.trim()}>
              {asking ? "..." : "Ask"}
            </button>
          </form>
          <div className="video-help">
            <h2><span>5</span>Need a visual nudge?</h2>
            <a
              className="btn ghost"
              href={videoUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open YouTube videos for ${p.title}`}
            >
              Watch the pattern ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function getSignature(code, language) {
  const text = String(code || "");
  const patterns = {
    javascript: /function\s+solve\s*\([^)]*\)/,
    python: /def\s+solve\s*\([^)]*\)/,
    java: /(?:public\s+)?(?:static\s+)?[A-Za-z0-9_<>,\[\] ?]+\s+solve\s*\([^)]*\)/,
    cpp: /[A-Za-z0-9_:<> ,&]+\s+solve\s*\([^)]*\)/,
  };
  const match = text.match(patterns[language]);
  if (!match) return "solve(...)";
  return match[0].replace(/\s*\{$/, "").trim();
}

function pickLang(starters) {
  if (starters.javascript) return "javascript";
  if (starters.python) return "python";
  if (starters.java) return "java";
  if (starters.cpp) return "cpp";
  return Object.keys(starters)[0] || "javascript";
}
