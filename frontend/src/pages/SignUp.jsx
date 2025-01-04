import React from "react";

const SignUp = () => {
  return (
    <div style={styles.container}>
      {/* Logo Section */}
      <div style={styles.logoSection}>
        <img src="logo.png" alt="Swapna Soundarya Logo" style={styles.logo} />
      </div>

      {/* Sign-Up Form Section */}
      <div style={styles.formSection}>
        <h1 style={styles.title}>Sign Up</h1>

        {/* Tabs for Login and Sign Up */}
        <div style={styles.tabs}>
          <p style={styles.tab}>Login</p>
          <span style={styles.divider}></span>
          <p style={{ ...styles.tab, fontWeight: "bold" }}>Sign Up</p>
        </div>

        {/* Form */}
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Enter your first name"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            style={styles.input}
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
    position: "relative", // Allows absolute positioning of the logo
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9C2CD",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  logoSection: {
    position: "absolute", // Moves the logo section to the top-left corner
    top: "30px",
    left: "30px",
  },
  logo: {
    height: "170px",
  },
  formSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7D1D8",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "670px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
  },
  tabs: {
    display: "flex",
    alignItems: "center",
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#e7f3ff",
    color: "#000",
    border: "none",
    padding: "12px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default SignUp;
