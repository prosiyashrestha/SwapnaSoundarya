import React from "react";

const EditProfile = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Edit Profile Title */}
      <h1 style={styles.title}>Edit Profile</h1>

      {/* Edit Profile Card */}
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <img src="user.png" alt="Profile Icon" style={styles.profileIcon} />
        </div>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.saveButton}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#F9C2CD",
    minHeight: "calc(100vh - 120px)", // Account for navbar and footer
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centers horizontally
    padding: "20px 0",
    gap: "10px", // Reduces gap between title and container
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    backgroundColor: "#FFE5EA",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "0", // Minimal gap between title and container
  },
  iconContainer: {
    marginBottom: "20px",
  },
  profileIcon: {
    width: "100px",
    height: "100px",
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
    marginBottom: "8px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#FCEFF1",
  },
  saveButton: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#F8C4CE",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    alignSelf: "center",
  },
};

export default EditProfile;
