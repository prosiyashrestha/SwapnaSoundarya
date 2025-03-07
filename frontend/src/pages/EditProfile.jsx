import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState("user.png"); // Default profile image
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const userId = JSON.parse(localStorage.getItem("user"))?.id;

  useEffect(() => {
    // Fetch current user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5500/api/users/getSingleUser/${userId}`
        );
        const { firstName, lastName, email, photo } = response.data.user;
        setFirstName(firstName || "");
        setLastName(lastName || "");
        setEmail(email || "");
        setProfilePreview(
          photo ? `http://localhost:5500/${photo}` : "user.png"
        );
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data.");
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      setError("All fields are required.");
      return;
    }

    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    if (profileImage) formData.append("profileImage", profileImage);

    try {
      const response = await axios.put(
        `http://localhost:5500/api/users/updateUser/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess(response.data.message);
      setError(null);
      setProfilePreview(
        response.data.user.photo
          ? `http://localhost:5500/${response.data.user.photo}`
          : "user.png"
      );
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err.response?.data?.message || "Failed to update profile.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Edit Profile</h1>

      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <img
            src={profilePreview}
            alt="Profile Icon"
            style={styles.profileIcon}
          />
          <label style={styles.cameraIconContainer}>
            <input
              type="file"
              accept="image/*"
              style={styles.fileInput}
              onChange={handleImageChange}
            />
            <img src="cam.png" alt="Upload" style={styles.uploadImage} />
          </label>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.errorText}>{error}</p>}
          {success && <p style={styles.successText}>{success}</p>}

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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    backgroundColor: "#FFE5EA",
    borderRadius: "15px",
    padding: "40px",
    width: "400px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  iconContainer: {
    position: "relative",
    marginBottom: "20px",
  },
  profileIcon: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  cameraIconContainer: {
    position: "absolute",
    top: "60px",
    right: "130px",
    cursor: "pointer",
  },
  uploadImage: {
    width: "40px",
    height: "40px",
  },
  fileInput: {
    display: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    width: "95%", // Full width for proper alignment
  },
  label: {
    marginBottom: "8px",
    textAlign: "left", // Align label text to the left
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%", // Full width for input fields
  },
  saveButton: {
    padding: "10px",
    backgroundColor: "#F8C4CE",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center", // Center align the button
    width: "150px",
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

export default EditProfile;
