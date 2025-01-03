import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3>STAY IN TOUCH</h3>
          <button style={styles.feedbackButton}>Give us your feedback</button>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>swapnasoundarya@gmail.com</p>
          <p>+977 9867891234</p>
          <p>Fulbari, Boudha</p>
          <p>Kathmandu, Nepal</p>
        </div>
        <div>
          <h3>Find us on socials</h3>
          <div style={styles.socialIcons}>
            <a href="#facebook" style={styles.icon}>
              📘
            </a>
            <a href="#instagram" style={styles.icon}>
              📸
            </a>
            <a href="#twitter" style={styles.icon}>
              🐦
            </a>
          </div>
        </div>
      </div>
      <p>© 2024 Swapna Soundarya</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f8d7da",
    textAlign: "center",
    padding: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  feedbackButton: {
    backgroundColor: "#f5c2c7",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    textDecoration: "none",
    fontSize: "24px",
    color: "#900c3f",
  },
};

export default Footer;
