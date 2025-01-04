import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img src="homepage.webp" alt="Hero" style={styles.heroImage} />
        <div style={styles.heroText}>
          <h1 style={styles.title}>Swapna Soundarya</h1>
          <h2 style={styles.subtitle}>BEAUTY AT YOUR DOOR</h2>
          <p style={styles.description}>
            Make your skin’s wellness a priority and let your natural glow shine
            with a tailored skincare ritual.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff",
    color: "#000",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  heroImage: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
  },
  heroText: {
    marginTop: "-100px",
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "normal",
  },
  description: {
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default HomePage;
