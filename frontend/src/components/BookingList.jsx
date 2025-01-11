import React, { useState, useEffect } from "react";

const BookingList = ({ bookings, onUpdateStatus, fetchAcceptedBy }) => {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleInfoClick = async (acceptedById) => {
    try {
      const acceptedByData = await fetchAcceptedBy(acceptedById);
      setModalData(acceptedByData[0]);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching acceptedBy data:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div style={styles.container}>
      {bookings.length === 0 ? (
        <p style={styles.noBookings}>No bookings available.</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.headerCell}>Service</th>
                <th style={styles.headerCell}>Category</th>
                <th style={styles.headerCell}>Sub Category</th>
                <th style={styles.headerCell}>Price</th>
                <th style={styles.headerCell}>Location</th>
                <th style={styles.headerCell}>Status</th>
                {user?.provider && (
                  <>
                    <th style={styles.headerCell}>Requested By</th>
                    <th style={styles.headerCell}>Action</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} style={styles.bodyRow}>
                  <td style={styles.cell}>{booking.service}</td>
                  <td style={styles.cell}>{booking.category}</td>
                  <td style={styles.cell}>{booking.subCategory}</td>
                  <td style={styles.cell}>{booking.price}</td>
                  <td style={styles.cell}>{booking.location}</td>
                  <td style={styles.statusCell}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        backgroundColor:
                          booking.status === "Accepted" ? "#28a745" : "#dc3545",
                      }}
                    >
                      {booking.status}
                      {!user?.provider &&
                        booking.status === "Accepted" &&
                        booking.acceptedBy && (
                          <button
                            style={styles.infoButton}
                            onClick={() => handleInfoClick(booking.acceptedBy)}
                          >
                            ℹ️
                          </button>
                        )}
                    </span>
                  </td>
                  {user?.provider && (
                    <>
                      <td style={styles.cell}>{booking.username}</td>
                      <td style={styles.cell}>
                        {booking.status === "Not Accepted" ? (
                          <div style={styles.buttonGroup}>
                            <button
                              style={styles.acceptButton}
                              onClick={() =>
                                onUpdateStatus(booking._id, "Accepted")
                              }
                            >
                              Accept
                            </button>
                          </div>
                        ) : (
                          <span style={styles.acceptedText}>Accepted</span>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for acceptedBy details */}
      {showModal && modalData && modalData.firstName && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Accepted By</h2>
            <p style={styles.modalText}>
              <strong>Name:</strong>{" "}
              {modalData?.firstName + " " + modalData?.lastName || "N/A"}
            </p>
            <p style={styles.modalText}>
              <strong>Email:</strong> {modalData?.email || "N/A"}
            </p>
            <p style={styles.modalText}>
              <strong>Phone:</strong> {modalData?.phone || "999999999"}{" "}
              {/* Replace 'phone' with the actual key */}
            </p>
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#FFE5EA",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  headerCell: {
    padding: "15px",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: "16px",
    backgroundColor: "#E91E63",
    color: "#fff",
    borderBottom: "2px solid #ddd",
  },
  bodyRow: {
    borderBottom: "1px solid #ddd",
  },
  cell: {
    padding: "10px",
    fontSize: "15px",
    color: "#333",
    textAlign: "left",
  },
  statusCell: {
    textAlign: "center",
  },
  statusBadge: {
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    minWidth: "100px",
  },
  infoButton: {
    marginLeft: "10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "14px",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  modalText: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  closeButton: {
    backgroundColor: "#E91E63",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default BookingList;
