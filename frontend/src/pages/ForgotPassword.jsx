import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [generatedPassword, setGeneratedPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5500/api/users/resetPassword",
        { email }
      );

      if (response.status === 200) {
        setGeneratedPassword(response.data.generatedPassword);
        setShowModal(true);
        setError(null);
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError(
        error.response?.data?.message ||
          "Server error while resetting password."
      );
      setSuccessMessage(null);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Forgot Password</h1>
      <div style={styles.card}>
        <p style={styles.instruction}>Please enter your email address</p>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p style={styles.errorText}>{error}</p>}
        {successMessage && <p style={styles.successText}>{successMessage}</p>}
        <button style={styles.resetButton} onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Password Reset</h2>
            <p style={styles.modalPassword}>
              Your new password is: {generatedPassword}
            </p>
            <Link to="/login">
              <button
                style={styles.modalButton}
                onClick={() => setShowModal(false)}
              >
                Okay
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
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
  error: {
    color: "red",
    fontSize: "14px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    width: "300px",
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  modalPassword: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  modalButton: {
    backgroundColor: "#FF8FA3",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  errorText: {
    color: "red",
    fontSize: "14px",
  },
  successText: {
    color: "green",
    fontSize: "14px",
  },
};

export default ForgotPassword;
