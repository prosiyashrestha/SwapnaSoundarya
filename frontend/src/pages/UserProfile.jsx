import React from "react";

const UserProfile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.profileImageContainer}>
          <img
            src="https://via.placeholder.com/100" // Replace with profile image source
            alt="Profile"
            style={styles.profileImage}
          />
          <div style={styles.editIconContainer}>
            <img
              src="https://via.placeholder.com/16" // Replace with edit icon source
              alt="Edit"
              style={styles.editIcon}
            />
          </div>
        </div>
        <button style={styles.editProfileButton}>Edit Profile</button>
        <div style={styles.details}>
          <p style={styles.label}>Full Name</p>
          <p style={styles.value}>Rani Rai</p>
          <p style={styles.label}>Email</p>
          <p style={styles.value}>ranirai21@gmail.com</p>
          <p style={styles.label}>Location</p>
          <p style={styles.value}>Boudha</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7C5CF",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  card: {
    backgroundColor: "#F8E9ED",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: "20px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#EAEAEA",
  },
  editIconContainer: {
    position: "absolute",
    bottom: "0",
    right: "0",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  editIcon: {
    width: "16px",
    height: "16px",
  },
  editProfileButton: {
    backgroundColor: "#87CEFA",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  details: {
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
  },
  value: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "15px",
  },
};

export default UserProfile;
