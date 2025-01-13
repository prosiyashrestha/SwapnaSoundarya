import React, { useEffect, useState } from "react";
import Api from "../apis/Api";
import BookingList from "../components/BookingList";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleUpdateStatus = async (bookingId, status) => {
    try {
      const acceptedBy = JSON.parse(localStorage.getItem("user"))?.id;
      await Api.put(`/bookings/${bookingId}`, { status, acceptedBy });
      fetchBookings(); // Refresh bookings after status update
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await Api.get(`/bookings/all`);
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Failed to fetch bookings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Bookings</h1>
      {loading ? (
        <p style={styles.loadingText}>Loading booking requests...</p>
      ) : (
        <BookingList
          bookings={bookings}
          onUpdateStatus={handleUpdateStatus}
          isProvider={true}
        />
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

export default AllBookings;
