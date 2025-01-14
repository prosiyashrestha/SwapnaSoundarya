import React, { useState } from "react";
import Api from "../apis/Api"; // Import the configured Api instance
import { useNavigate } from "react-router-dom";

const BeOurBeautician = () => {
  const [photo, setPhoto] = useState(null);
  const [cv, setCv] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleCvUpload = (event) => {
    setCv(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Log formData to verify all fields are populated
    console.log("FormData:", formData);
  
    if (!photo || !cv) {
      alert("Please upload both photo and CV.");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Create FormData object for the API request
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("photo", photo);
    data.append("cv", cv);
  
    // Log data for debugging
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      const response = await Api.post("/provider/beourbeautician", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      alert(
        response.data.message || "Successfully registered as a beautician!"
      );
      navigate("/login");
    } catch (error) {
      console.error("Error submitting the form:", error.response || error);
      alert(
        error.response?.data?.message || "An error occurred while registering."
      );
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.title}>Register as our beautician</h2>
      <div style={styles.mainContainer}>
        <div style={styles.leftContainer}>
          <form style={styles.form}>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              style={styles.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              style={styles.input}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              style={styles.input}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              style={styles.input}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              style={styles.input}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              style={styles.input}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div style={styles.rightContainer}>
          <div style={styles.uploadBox}>
            <p>Upload your photo</p>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={styles.fileInput}
            />
            {photo && <p style={styles.fileName}>{photo.name}</p>}
          </div>
          <div style={styles.uploadBox}>
            <p>Upload your CV</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCvUpload}
              style={styles.fileInput}
            />
            {cv && <p style={styles.fileName}>{cv.name}</p>}
          </div>
        </div>
      </div>
      <button
        type="submit"
        style={styles.registerButton}
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7C5CF",
    paddingTop: "40px",
    paddingBottom: "40px",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "40px",
    marginTop: "40px",
    color: "#333",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFE5EA",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "80%",
    height: "430px",
  },
  leftContainer: {
    flex: 1,
    padding: "15px",
  },
  rightContainer: {
    flex: 1,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  uploadBox: {
    backgroundColor: "#F9F9F9",
    border: "2px dashed #ccc",
    borderRadius: "5px",
    padding: "30px",
    textAlign: "center",
    cursor: "pointer",
  },
  fileInput: {
    marginTop: "10px",
    fontSize: "14px",
    cursor: "pointer",
  },
  fileName: {
    fontSize: "14px",
    color: "#333",
    marginTop: "10px",
  },
  registerButton: {
    marginTop: "20px",
    backgroundColor: "#FF8FA3",
    border: "none",
    padding: "15px 30px",
    borderRadius: "5px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default BeOurBeautician;
