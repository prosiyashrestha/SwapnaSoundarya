import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../apis/Api";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.email) {
        setError("User is not logged in.");
        return;
      }

      const payload = {
        email: user.email,
        currentPassword,
        newPassword,
      };

      const response = await changePassword(payload);
      if (response.message || response.status === 200) {
        setUserName(`${user.firstName} ${user.lastName}`);
        setShowSuccessModal(true);
        setError(null);
      } else {
        setError(response.error || "Failed to change password.");
      }
    } catch (err) {
      console.error("Error changing password:", err);
      setError(
        err.response?.data?.error ||
          "Failed to change password. Please try again."
      );
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div style={styles.pageContainer}>
      {showSuccessModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <img
              src="booked.png" // Replace with the actual path to your checkmark icon
              alt="Success"
              style={styles.successIcon}
            />
            <h2 style={styles.successTitle}>
              Your password has been saved, {userName}!
            </h2>
            <button style={styles.okButton} onClick={handleCloseModal}>
              Okay
            </button>
          </div>
        </div>
      )}
      <h1 style={styles.title}>Change Password</h1>
      <div style={styles.card}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Current Password</label>
            <input
              type="password"
              placeholder="Enter your current password"
              style={styles.input}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              style={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your new password"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={styles.errorText}>{error}</p>}
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.confirmButton}>
              Save
            </button>
            <button
              type="button"
              style={styles.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#F9C2CD",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    fontFamily: "'Arial', sans-serif",
    padding: "20px 0",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  card: {
    backgroundColor: "#FFE5EA",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#FCEFF1",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  confirmButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#6EC1E4",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#F38181",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    cursor: "pointer",
  },
  errorText: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
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
    backgroundColor: "#FDEDEE",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "400px",
  },
  successIcon: {
    width: "50px",
    marginBottom: "20px",
  },
  successTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  okButton: {
    backgroundColor: "#6EC1E4",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ChangePassword;
