import React, { useState } from "react";

const BookingList = ({
  bookings,
  fetchAcceptedBy,
  onUpdateStatus,
  isProvider,
}) => {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInfoClick = async (acceptedById) => {
    try {
      const providerDetails = await fetchAcceptedBy(acceptedById);
      setModalData(providerDetails);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching provider details:", error.message);
      alert("Failed to fetch provider details.");
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
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Service</th>
              <th style={styles.headerCell}>Category</th>
              <th style={styles.headerCell}>Sub Category</th>
              <th style={styles.headerCell}>Price</th>
              <th style={styles.headerCell}>Location</th>
              {isProvider && <th style={styles.headerCell}>Requested By</th>}
              <th style={styles.headerCell}>Status</th>
              {isProvider && <th style={styles.headerCell}>Action</th>}
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
                {isProvider && (
                  <td style={styles.cell}>
                    {booking.userId ? (
                      <>
                        <strong>{`${booking.userId.firstName} ${booking.userId.lastName}`}</strong>
                        <br />
                        <small>{booking.userId.email}</small>
                      </>
                    ) : (
                      "N/A"
                    )}
                  </td>
                )}
                <td style={styles.cell}>
                  {booking.status === "Accepted" ? (
                    <div style={styles.statusContainer}>
                      <button style={styles.acceptedButton}>
                        Accepted
                        {!isProvider && booking.acceptedBy && (
                          <span
                            style={styles.infoIcon}
                            onClick={() =>
                              handleInfoClick(booking.acceptedBy._id)
                            }
                          >
                            ℹ️
                          </span>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div style={styles.statusContainer}>
                      <button style={styles.notAcceptedButton}>
                        Not Accepted
                      </button>
                    </div>
                  )}
                </td>
                {isProvider && (
                  <td style={styles.cell}>
                    {booking.status === "Not Accepted" && (
                      <button
                        style={styles.acceptButton}
                        onClick={() => onUpdateStatus(booking._id, "Accepted")}
                      >
                        Accept
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for Provider Details */}
      {showModal && modalData && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Provider Details</h2>
            <p style={styles.modalText}>
              <strong>Name:</strong>{" "}
              {`${modalData.firstName} ${modalData.lastName}`}
            </p>
            <p style={styles.modalText}>
              <strong>Email:</strong> {modalData.email}
            </p>
            <p style={styles.modalText}>
              <strong>Phone:</strong> {modalData.phone || "N/A"}
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
  statusContainer: {
    display: "inline-block",
    textAlign: "center",
  },
  acceptedButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "2px solid #28a745",
    borderRadius: "20px",
    padding: "5px 15px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    cursor: "pointer",
  },
  notAcceptedButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "2px solid #dc3545",
    borderRadius: "20px",
    padding: "5px 15px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  infoIcon: {
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "5px",
  },
  acceptButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
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
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "290px",
    height: "230px",
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
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BookingList;
