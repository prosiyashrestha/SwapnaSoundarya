import React from "react";

const Faqs = () => {
  return (
    <div style={styles.container}>
      {/* Faqs Section */}
      <div style={styles.faqsSection}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Frequently Asked Questions</h1>
          <h2 style={styles.subtitle}>
            Q. Do I need any special setup at home for the service?
          </h2>
          <p style={styles.paragraph}>
            No special setup is required. Our professionals bring everything
            needed to make the experience comfortable and relaxing.
          </p>
          <h2 style={styles.subtitle}>Q. How can I pay for my service?</h2>
          <p style={styles.paragraph}>
            You can pay securely online through our website. We offer multiple
            payment options for your convience.
          </p>
          <h2 style={styles.subtitle}>
            Q. Can I reschedule or cancel my booking?
          </h2>
          <p style={styles.paragraph}>
            Yes, you can easily reschedule or cancel you booking through our
            website.
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
  faqsSection: {
    display: "grid",
    placeItems: "center", // Centers the grid content both vertically and horizontally
    gap: "40px",
    textAlign: "center",
  },
  textContainer: {
    padding: "0 20px",
    maxWidth: "800px", // Limits the width of the text section for better readability
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

export default Faqs;
