import React, { useEffect, useState } from "react";
import Api from "../apis/Api";
import BookingList from "../components/BookingList";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAcceptedBy = async (email) => {
    const response = await Api.get(`/users/${email}`); // Replace with your API endpoint
    return response.data;
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const email = JSON.parse(localStorage.getItem("user"))?.email;
      if (!email) {
        alert("User not logged in. Please log in again.");
        return;
      }

      try {
        const response = await Api.get(`/bookings/user/${email}`);
        setBookings(response.data); // Assuming the API response contains the booking list
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to fetch bookings. Please try again later.");
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
