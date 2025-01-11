import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img src="hpvid.gif" alt="Hero Animation" style={styles.heroGif} />
        <div style={styles.heroText}>
          <h1 style={styles.title}>Swapna Soundarya</h1>
          <h2 style={styles.subtitle}>BEAUTY AT YOUR DOOR</h2>
        </div>
      </section>

      {/* Description Section */}
      <p style={styles.description}>
        Make your skin’s wellness a priority and let your natural glow shine
        with a tailored skincare ritual.
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "20px",
  },
  heroGif: {
    width: "100%",
    height: "auto",
    maxHeight: "600px", // Increased height for the GIF
    objectFit: "cover",
    borderRadius: "10px",
  },
  heroText: {
    position: "absolute", // Text overlay on the GIF
    top: "60%", // Lowered the position of the title and subtitle
    transform: "translateY(-50%)",
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
  },
  title: {
    fontSize: "48px", // Bigger font size for the title
    fontWeight: "bold", // Bold styling
    marginBottom: "10px", // Added spacing between title and subtitle
  },
  subtitle: {
    fontSize: "28px", // Bigger font size for the subtitle
    fontWeight: "bold", // Bold styling
  },
  description: {
    fontSize: "20px", // Bigger font size for the description
    fontWeight: "bold", // Bold styling
    marginTop: "20px", // Added spacing above the description
    padding: "0 20px", // Padding for better readability on smaller screens
    lineHeight: "1.8", // Improved line spacing for larger text
  },
};

export default HomePage;
