import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Logo Section */}
      <div style={styles.logoSection}>
        <img src="logo.png" alt="Swapna Soundarya Logo" style={styles.logo} />
        <p style={styles.copyright}>© 2024 Swapna Soundarya</p>
      </div>

      {/* Stay in Touch Section */}
      <div style={styles.stayInTouch}>
        <h3 style={styles.title}>STAY IN TOUCH</h3>
        <p style={styles.feedbackText}>Give us your feedback</p>
        <Link to="/feedback" style={styles.link}>
        <button style={styles.feedbackButton}>CLICK HERE</button>
        </Link>
        
      </div>

      {/* Contact Us Section */}
      <div style={styles.contactSection}>
        <h3 style={styles.title}>Contact Us</h3>
        <p>swapnasoundarya@gmail.com</p>
        <p>+977 9867891234</p>
        <p>Fulbari, Boudha</p>
        <p>Kathmandu, Nepal</p>
      </div>

      {/* Social Media Section */}
      <div style={styles.socialSection}>
        <h3 style={styles.title}>Find us on socials</h3>
        <div style={styles.iconsContainer}>
          <img src="socials.png" alt="Socials" style={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7D1D8",
    padding: "20px 40px",
    fontFamily: "'Arial', sans-serif",
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    flex: 1,
  },
  logo: {
    height: "150px",
    marginBottom: "10px",
  },
  tagline: {
    fontSize: "14px",
    color: "#000",
  },
  copyright: {
    fontSize: "17px",
    marginTop: "13px",
    color: "#000",
  },
  stayInTouch: {
    flex: 1,
    textAlign: "center",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  feedbackText: {
    fontSize: "17px",
    marginBottom: "10px",
  },
  feedbackButton: {
    backgroundColor: "#ffffff",
    color: "#000",
    border: "1px solid #ccc",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  contactSection: {
    flex: 1,
    textAlign: "center",
  },
  socialSection: {
    flex: 1,
    textAlign: "center",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  icon: {
    width: "190px",
    height: "80px",
  },
};

export default Footer;
