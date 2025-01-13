import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage and server
    const fetchUserData = async () => {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));

      if (loggedInUser?.id) {
        try {
          const response = await axios.get(
            `http://localhost:5500/api/users/getSingleUser/${loggedInUser.id}`
          );
          setUser(response.data.user);
          setError(null);
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Failed to fetch user data.");
        }
      } else {
        setError("No user is logged in.");
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p style={styles.loadingText}>Loading...</p>;
  }

  if (error) {
    return <p style={styles.errorText}>{error}</p>;
  }

  if (!user) {
    return <p style={styles.errorText}>User not found.</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Profile</h1>
      </div>
      <div style={styles.card}>
        <div style={styles.profileImageContainer}>
          <img
            src={
              user.photo ? `http://localhost:5500/${user.photo}` : "user.png"
            }
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
        <Link to="/editprofile">
          <button style={styles.editProfileButton}>Edit Profile</button>
        </Link>

        <div style={styles.details}>
          <p style={styles.label}>First Name</p>
          <p style={styles.value}>{user.firstName}</p>
          <p style={styles.label}>Last Name</p>
          <p style={styles.value}>{user.lastName}</p>
          <p style={styles.label}>Email</p>
          <p style={styles.value}>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7C5CF",
    height: "90vh",
    fontFamily: "'Arial', sans-serif",
  },
  titleContainer: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "#F8E9ED",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "450px",
    height: "450px",
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
    objectFit: "cover",
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
  loadingText: {
    fontSize: "18px",
    color: "#555",
  },
  errorText: {
    fontSize: "16px",
    color: "red",
  },
};

export default Profile;
