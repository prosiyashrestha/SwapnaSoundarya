import React from "react";

const Navbar = () => {
  return (
    <header style={styles.header}>
      {/* Logo Section */}
      <div style={styles.navItem}>
        <img src="logo.png" alt="Swapna Soundarya Logo" style={styles.logo} />
      </div>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <a href="#home" style={styles.navItem}>
          Home
        </a>
        <a href="#services" style={styles.navItem}>
          Services
        </a>
        <a href="#about" style={styles.navItem}>
          About Us
        </a>
        <a href="#faqs" style={styles.navItem}>
          FAQs
        </a>
        <a href="#beautician" style={styles.navItem}>
          Be Our Beautician
        </a>
      </nav>

      {/* User Icon */}
      <div style={styles.navItem}>
        <img src="user.png" alt="User Icon" style={styles.userIconImage} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8d7da",
    padding: "10px 40px",
    borderBottom: "1px solid #ccc",
  },
  navItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
  },
  logo: {
    height: "110px",
  },
  nav: {
    display: "flex",
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  userIconImage: {
    height: "40px",
    cursor: "pointer",
  },
};

export default Navbar;
