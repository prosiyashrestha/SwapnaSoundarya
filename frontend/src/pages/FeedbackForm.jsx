import React, { useState } from "react";
import { saveFeedback } from "../apis/Api"; // Assuming you have a saveFeedback API function

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(null);

  const onSaveFeedback = async (feedbackData) => {
    try {
      await saveFeedback(feedbackData);
      alert("Feedback submitted successfully!");
      setFeedback("");
      setError(null);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setError("Failed to submit feedback. Please try again.");
    }
  };

  const handleSave = () => {
    if (!feedback.trim()) {
      setError("Feedback cannot be empty.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const feedbackData = {
      username: user?.firstName || "Anonymous",
      feedback,
    };

    onSaveFeedback(feedbackData);
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Leave a Feedback</h1>
      <div style={styles.card}>
        <textarea
          style={styles.textarea}
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        {error && <p style={styles.errorText}>{error}</p>}
        <div style={styles.buttonContainer}>
          <button style={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button style={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9C2CD",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#F8E9ED",
    borderRadius: "15px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "400px",
    textAlign: "center",
  },
  textarea: {
    width: "90%",
    height: "150px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    resize: "none",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#87CEFA",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#FF8A8A",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  errorText: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default FeedbackForm;
