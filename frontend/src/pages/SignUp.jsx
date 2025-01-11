import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const { firstName, lastName, email, phone, password, confirmPassword } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong.");
      } else {
        setSuccessMessage("User created successfully!");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formSection}>
        <h1 style={styles.title}>Sign Up</h1>
        <div style={styles.tabs}>
          <Link to="/login" style={styles.link}>
            <p style={styles.tab}>Login</p>
          </Link>
          <span style={styles.divider}></span>
          <p style={{ ...styles.tab, fontWeight: "bold" }}>Sign Up</p>
        </div>

        {error && <p style={styles.error}>{error}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>}

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            style={styles.input}
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            style={styles.input}
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            style={styles.input}
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            style={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9C2CD",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  formSection: {
    backgroundColor: "#F7D1D8",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    fontSize: "16px",
    margin: "0 20px",
    color: "#000",
    cursor: "pointer",
  },
  divider: {
    height: "24px",
    width: "1px",
    backgroundColor: "#000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#900c3f",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  success: {
    color: "green",
    marginBottom: "10px",
  },
};

export default SignUp;
