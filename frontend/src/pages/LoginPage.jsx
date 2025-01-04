import React from "react";

const LoginPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img src="logo.png" alt="Swapna Soundarya Logo" style={styles.logo} />
      </div>

      {/* Main Container */}
      <div style={styles.mainContainer}>
        {/* Left Image Section */}
        <div style={styles.imageContainer}>
          <img src="login.jpg" alt="Wellness Service" style={styles.image} />
        </div>

        {/* Right Form Section */}
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Login</h2>
          <div style={styles.tabContainer}>
            <span style={styles.activeTab}>Login</span>
            <span style={styles.separator}>|</span>
            <span style={styles.inactiveTab}>Sign Up</span>
          </div>
          <form style={styles.form}>
            <input type="email" placeholder="Email" style={styles.input} />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />
            <a href="#forgot-password" style={styles.forgotPassword}>
              Forgot Password?
            </a>
            <button type="submit" style={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#F9C2CD",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  logo: {
    height: "170px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7D1D8",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    width: "60%",
    height: "50%",
    padding: "20px",
  },
  imageContainer: {
    flex: 1,
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
  formContainer: {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f8d7da",
    borderRadius: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  activeTab: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000000",
  },
  inactiveTab: {
    fontSize: "16px",
    color: "#888888",
    cursor: "pointer",
  },
  separator: {
    margin: "0 10px",
    fontSize: "16px",
    color: "#888888",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  forgotPassword: {
    textAlign: "right",
    fontSize: "12px",
    color: "#900c3f",
    textDecoration: "none",
  },
  loginButton: {
    backgroundColor: "#900c3f",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "10px",
  },
};

export default LoginPage;
