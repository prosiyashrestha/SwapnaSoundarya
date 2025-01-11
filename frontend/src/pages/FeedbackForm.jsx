import React from "react";

const FeedbackForm = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Leave a feedback</h1>
      <div style={styles.card}>
        <textarea
          style={styles.textarea}
          placeholder="Type here ..."
        ></textarea>
        <div style={styles.buttonContainer}>
          <button style={styles.saveButton}>Save</button>
          <button style={styles.cancelButton}>Cancel</button>
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
};

export default FeedbackForm;
