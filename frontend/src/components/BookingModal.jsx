import React, { useState } from "react";
import Api from "../apis/Api"; // Update the path to your Api file

const BookingModal = ({ service, user, onClose }) => {
  const [location, setLocation] = useState("");

  const handleBooking = async () => {
    console.log("");
    const email = JSON.parse(localStorage.getItem("user"))?.email;
    if (!email) {
      alert("User email not found. Please log in again.");
      return;
    }
    console.log(email);

    const bookingData = {
      userId: JSON.parse(localStorage.getItem("user"))?.id,
      username: `${user.firstName} ${user.lastName}`,
      category: service.category,
      subCategory: service.subCategory,
      service: service.title,
      price: service.price,
      location,
    };

    console.log(bookingData);

    try {
      const response = await Api.post("/bookings/book", bookingData);
      if (response.status === 201) {
        alert("Your booking has been added!");
        onClose(); // Close the modal
      } else {
        alert("Failed to confirm booking. Please try again.");
      }
    } catch (error) {
      console.error("Error booking service:", error);
      alert("An error occurred while booking the service. Please try again.");
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <h1 style={styles.modalTitle}>Booking</h1>
        <div style={styles.modalCard}>
          <h2 style={styles.modalUser}>
            {user.firstName} {user.lastName}
          </h2>
          <p style={styles.modalDetail}>
            <strong>Category:</strong> {service.category}
          </p>
          <p style={styles.modalDetail}>
            <strong>Sub Category:</strong> {service.subCategory}
          </p>
          <p style={styles.modalDetail}>
            <strong>Service:</strong> {service.title}
          </p>
          <p style={styles.modalDetail}>
            <strong>Price:</strong> {service.price}
          </p>
          <p style={styles.modalDetail}>
            <strong>Payment Method:</strong>
          </p>
          <div style={styles.paymentMethods}>
            <button style={styles.paymentButton}>
              <img src="khalti.png" alt="Khalti" style={styles.paymentIcon} />
              Khalti
            </button>
            <button style={styles.paymentButton}>CASH</button>
          </div>
          <p style={styles.modalDetail}>
            <strong>Your Location:</strong>
          </p>
          <select
            style={styles.locationDropdown}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Choose your location</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>
          <div style={styles.buttonGroup}>
            <button
              style={styles.confirmButton}
              onClick={handleBooking}
              disabled={!location}
            >
              Confirm Booking
            </button>
            <button style={styles.cancelButton} onClick={onClose}>
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#FFE5EA",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "500px",
  },
  modalTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  modalCard: {
    textAlign: "left",
  },
  modalUser: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  modalDetail: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  paymentMethods: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  paymentButton: {
    backgroundColor: "#6ECC77",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  paymentIcon: {
    width: "20px",
    height: "20px",
  },
  locationDropdown: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  confirmButton: {
    backgroundColor: "#6EC1E4",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#F38181",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default BookingModal;
