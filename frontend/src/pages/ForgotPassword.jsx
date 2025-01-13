import React from "react";

const ForgotPassword = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Forgot Password</h1>
      <div style={styles.card}>
        <p style={styles.instruction}>Please enter your email address</p>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
        />
        <button style={styles.resetButton}>Reset Password</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    backgroundColor: "#F7C5CF",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#FFE5EA",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "400px",
  },
  instruction: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
  },
  input: {
    width: "90%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "14px",
  },
  resetButton: {
    backgroundColor: "#FF8FA3",
    border: "none",
    padding: "12px 20px",
    borderRadius: "20px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
};

export default ForgotPassword;
