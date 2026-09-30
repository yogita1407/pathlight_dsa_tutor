import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizBank, genericQuestions } from "../data/quizBank.js";
import { api } from "../api.js";

// Utility to shuffle an array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState(false);
  const [score, setScore] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    initQuiz();
  }, [slug]);

  const initQuiz = () => {
    let topicQuestions = quizBank[slug];
    if (!topicQuestions || topicQuestions.length === 0) {
      topicQuestions = genericQuestions;
    }
    setQuestions(shuffleArray(topicQuestions).slice(0, 15));
    setAnswers({});
    setCurrentIndex(0);
    setSubmitted(false);
    setPassed(false);
    setScore(0);
    setErrorMsg("");
  };

  const handleSelect = (optIndex) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: optIndex }));
    setTimeout(() => {
      if (currentIndex < 14) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Last question answered
        evaluateQuiz({ ...answers, [currentIndex]: optIndex });
      }
    }, 300);
  };

  const evaluateQuiz = (finalAnswers) => {
    let currentScore = 0;
    questions.forEach((q, i) => {
      if (finalAnswers[i] === q.answer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setSubmitted(true);
    if (currentScore === 15) {
      setPassed(true);
    }
  };

  const handleComplete = async () => {
    try {
      await api(`/api/topics/${slug}/complete`, { method: "POST" });
      navigate("/app/roadmap");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  const handleCancel = () => {
    navigate(`/app/topic/${slug}`);
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex) / 15) * 100;

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        {/* Header / Progress */}
        {!submitted && (
          <div style={styles.header}>
            <div style={styles.progressHeader}>
              <span style={{ fontWeight: 600 }}>Knowledge Check • Question {currentIndex + 1} of 15</span>
              <button style={styles.closeBtn} onClick={handleCancel}>&times;</button>
            </div>
            <div style={styles.progressBarBg}>
              <div style={{ ...styles.progressBarFill, width: `${progressPercent}%` }} />
            </div>
          </div>
        )}

        {/* Question View */}
        {!submitted && (
          <div style={styles.body}>
            <h2 style={styles.questionText}>{currentQ.question}</h2>
            <div style={styles.optionsContainer}>
              {currentQ.options.map((opt, optIndex) => {
                const isSelected = answers[currentIndex] === optIndex;
                return (
                  <button
                    key={optIndex}
                    style={{ ...styles.optionBtn, ...(isSelected ? styles.optionSelected : {}) }}
                    onClick={() => handleSelect(optIndex)}
                  >
                    <span style={{ ...styles.optionLetter, ...(isSelected ? styles.optionLetterSelected : {}) }}>
                      {String.fromCharCode(65 + optIndex)}
                    </span>
                    <span style={styles.optionLabel}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Result View */}
        {submitted && (
          <div style={styles.resultBody}>
            {passed ? (
              <>
                <div style={styles.iconSuccess}>🎉</div>
                <h2 style={{ marginBottom: 8 }}>Perfect Score!</h2>
                <p className="muted" style={{ marginBottom: 24 }}>You answered all 15 questions correctly. You're ready for the next topic.</p>
                {errorMsg && <p style={{ color: "var(--danger)", marginBottom: 16 }}>{errorMsg}</p>}
                <button className="btn" style={{ width: "100%", padding: "12px 0", fontSize: "1.1rem" }} onClick={handleComplete}>
                  Unlock Next Topic & Return to Roadmap
                </button>
              </>
            ) : (
              <>
                <div style={styles.iconFail}>⚠️</div>
                <h2 style={{ marginBottom: 8 }}>Score: {score} / 15</h2>
                <p className="muted" style={{ marginBottom: 24 }}>You need a perfect score to proceed. Review the material and try again!</p>
                <button className="btn" style={{ width: "100%", padding: "12px 0", fontSize: "1.1rem", marginBottom: 12 }} onClick={initQuiz}>
                  Retry Quiz
                </button>
                <button style={styles.btnSecondary} onClick={handleCancel}>
                  Cancel
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "80vh",
    paddingTop: "24px",
  },
  card: {
    backgroundColor: "var(--bg)",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid var(--border)",
  },
  header: {
    padding: "24px 24px 16px 24px",
    borderBottom: "1px solid var(--border)",
  },
  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    fontSize: "0.95rem",
    color: "var(--text)",
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "1.75rem",
    cursor: "pointer",
    color: "var(--muted)",
    lineHeight: 1,
    padding: 0,
  },
  progressBarBg: {
    height: "6px",
    backgroundColor: "var(--border)",
    borderRadius: "3px",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "var(--primary, #646cff)",
    transition: "width 0.3s ease",
  },
  body: {
    padding: "32px 24px",
  },
  questionText: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: "24px",
    color: "var(--text)",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  optionBtn: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "16px",
    backgroundColor: "transparent",
    border: "2px solid var(--border)",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.2s ease",
    color: "var(--text)",
  },
  optionSelected: {
    borderColor: "var(--primary, #646cff)",
    backgroundColor: "rgba(100, 108, 255, 0.05)",
  },
  optionLetter: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px",
    borderRadius: "14px",
    backgroundColor: "var(--border)",
    color: "var(--text)",
    fontWeight: 600,
    marginRight: "16px",
    fontSize: "0.85rem",
    transition: "all 0.2s ease",
  },
  optionLetterSelected: {
    backgroundColor: "var(--primary, #646cff)",
    color: "#fff",
  },
  optionLabel: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  resultBody: {
    padding: "48px 24px",
    textAlign: "center",
  },
  iconSuccess: {
    fontSize: "4rem",
    marginBottom: "16px",
  },
  iconFail: {
    fontSize: "4rem",
    marginBottom: "16px",
  },
  btnSecondary: {
    width: "100%",
    padding: "12px 0",
    fontSize: "1.1rem",
    backgroundColor: "transparent",
    border: "2px solid var(--border)",
    borderRadius: "8px",
    color: "var(--text)",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background-color 0.2s",
  }
};
