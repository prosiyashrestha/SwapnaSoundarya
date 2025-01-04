import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* About Us Section */}
      <div style={styles.aboutUsSection}>
        <div style={styles.imageContainer}>
          <img src="aboutus1.jpg" alt="Hair Styling" style={styles.imageLeft} />
          <img
            src="aboutus2.png"
            alt="Facial Treatment"
            style={styles.imageRight}
          />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>About Us</h1>
          <h2 style={styles.subtitle}>Know more about Swapna Soundarya</h2>
          <p style={styles.paragraph}>
            Welcome to Swapna Soundarya, the beauty & wellness service that
            brings the luxury of a salon directly to you.
          </p>
          <p style={styles.paragraph}>
            Our skilled experts are dedicated to delivering a broad range of
            treatments, from refreshing facials to relaxing massages, elegant
            manicure and pedicure, and much more, all tailored to meet your
            unique needs.
          </p>
          <p style={styles.footerText}>
            Enjoy the ease of having beauty and wellness treatments come to you.
            With Swapna Soundarya, self-care has never been so convenient and
            luxurious.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#F9C2CD",
    padding: "40px",
    fontFamily: "'Arial', sans-serif",
  },
  aboutUsSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto", // Ensures the text and image sections are of equal height
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    justifySelf: "center",
  },
  imageLeft: {
    width: "250px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginLeft: "auto",
  },
  imageRight: {
    width: "250px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginRight: "auto",
  },
  textContainer: {
    textAlign: "center",
    justifySelf: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  footerText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginTop: "20px",
  },
};

export default AboutUs;
