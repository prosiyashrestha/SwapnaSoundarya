import React, { useEffect, useState } from "react";
import Api from "../apis/Api";
import BookingList from "../components/BookingList";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch provider details (acceptedBy user)
  const fetchAcceptedBy = async (identifier) => {
    try {
      console.log("Fetching provider details for ID:", identifier); // Debugging log
      const response = await Api.get(`/users/getSingleUser/${identifier}`);
      console.log("Provider details fetched:", response.data); // Log fetched details
      return response.data.user; // Ensure backend returns `user` in the response
    } catch (error) {
      console.error(
        "Error fetching provider details:",
        error.response || error.message
      );
      throw new Error("Failed to fetch provider details.");
    }
  };

  // Function to fetch bookings for the logged-in user
  useEffect(() => {
    const fetchBookings = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))?.id;
      if (!userId) {
        alert("User not logged in. Please log in again.");
        return;
      }

      try {
        console.log("Fetching bookings for user ID:", userId); // Debugging log
        const response = await Api.get(`/bookings/user/${userId}`);
        if (response.data) {
          setBookings(response.data); // Assuming response.data contains the bookings list
        } else {
          alert("No bookings found.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to fetch bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Bookings</h1>
      {loading ? (
        <p style={styles.loadingText}>Loading your bookings...</p>
      ) : (
        <BookingList bookings={bookings} fetchAcceptedBy={fetchAcceptedBy} />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#F9F9F9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  loadingText: {
    fontSize: "18px",
    color: "#666",
    textAlign: "center",
  },
};

export default MyBookings;
