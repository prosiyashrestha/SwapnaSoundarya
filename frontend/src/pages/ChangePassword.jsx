import React from "react";

const ChangePassword = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Title */}
      <h1 style={styles.title}>Change Password</h1>

      {/* Card */}
      <div style={styles.card}>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Current Password</label>
            <input
              type="password"
              placeholder="Enter your current password"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your new password"
              style={styles.input}
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.confirmButton}>
              Confirm
            </button>
            <button type="button" style={styles.cancelButton}>
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
    marginBottom: "10px", // Reduced margin to lessen the gap
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
};

export default ChangePassword;
