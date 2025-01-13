import React from "react";

const BookingList = ({ bookings, onUpdateStatus }) => {
  const user = JSON.parse(localStorage.getItem("user"));

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
                <th style={styles.headerCell}>Requested By</th>
                <th style={styles.headerCell}>Action</th>
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
                    </span>
                  </td>
                  <td style={styles.cell}>
                    {booking.userId
                      ? `${booking.userId.firstName} ${booking.userId.lastName}`
                      : "N/A"}
                  </td>
                  <td style={styles.cell}>
                    {booking.status === "Not Accepted" ? (
                      <button
                        style={styles.acceptButton}
                        onClick={() => onUpdateStatus(booking._id, "Accepted")}
                      >
                        Accept
                      </button>
                    ) : (
                      <span style={styles.acceptedText}>Accepted</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  acceptButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  acceptedText: {
    color: "#28a745",
    fontWeight: "bold",
  },
};

export default BookingList;
