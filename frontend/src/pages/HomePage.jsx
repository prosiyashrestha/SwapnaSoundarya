import React, { useState, useEffect } from "react";
import { fetchFeedbacks } from "../apis/Api";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

const HomePage = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch feedbacks from the backend when the component loads
    const fetchAllFeedbacks = async () => {
      try {
        const feedbacks = await fetchFeedbacks(); // Fetch all feedbacks
        setFeedbackList(feedbacks);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchAllFeedbacks();

    // Show toast message if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName && user.lastName) {
      toast.success(`Hello, ${user.firstName} ${user.lastName}! Welcome back`, {
        position: "top-right", // Fixed position
        autoClose: 3000, // Auto-close the toast after 3 seconds
      });
    }
  }, []);

  return (
    <div style={styles.container}>
      {/* Toast Container for displaying toasts */}
      <ToastContainer />

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

      {/* Booking Steps Section */}
      <section style={styles.stepsSection}>
        <h2 style={styles.stepsTitle}>How to book our Services</h2>
        <div style={styles.steps}>
          <p>01 Create your account</p>
          <p>02 Choose your services</p>
          <p>03 Input your address</p>
          <p>04 Book Service</p>
        </div>
        <Link to="/services">
          <button style={styles.getStartedButton}>Get Started</button>
        </Link>
      </section>

      {/* Feedback Section */}
      <section style={styles.feedbackSection}>
        <h2 style={styles.feedbackTitle}>View Feedbacks of our Services</h2>
        <div style={styles.feedbackCards}>
          {feedbackList.length > 0 ? (
            feedbackList.map((item, index) => (
              <div key={index} style={styles.feedbackCard}>
                <h3 style={styles.feedbackUsername}>{item.username}</h3>
                <p style={styles.feedbackText}>{item.feedback}</p>
              </div>
            ))
          ) : (
            <p>No feedback available</p>
          )}
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
    maxHeight: "600px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  heroText: {
    position: "absolute",
    top: "60%",
    transform: "translateY(-50%)",
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0,0,0,0.8)",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    padding: "0 20px",
    lineHeight: "1.8",
  },
  stepsSection: {
    backgroundColor: "#f8d7da",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  },
  stepsTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  steps: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  getStartedButton: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #000",
    fontWeight: "bold",
    cursor: "pointer",
  },
  feedbackSection: {
    backgroundColor: "#f8d7da",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  },
  feedbackTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  feedbackCards: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  feedbackCard: {
    backgroundColor: "#ffdce1",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "center",
  },
  feedbackUsername: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  feedbackText: {
    fontSize: "14px",
    color: "#555",
  },
};

export default HomePage;
