import React from "react";

const ProviderHome = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Title */}
      <h1 style={styles.title}>Service Request</h1>

      {/* Table */}
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <span style={styles.tableHeaderCell}>User Email</span>
          <span style={styles.tableHeaderCell}>User Name</span>
          <span style={styles.tableHeaderCell}>Price</span>
          <span style={styles.tableHeaderCell}>Action</span>
        </div>
        <div style={styles.tableBody}>
          {/* Rows can be dynamically added here */}
        </div>
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button style={styles.paginationButton}>Previous</button>
        <button style={styles.paginationButton}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#F9C2CD",
    fontFamily: "'Arial', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "10px 40px",
    backgroundColor: "#FFE5EA",
    borderBottom: "1px solid #ccc",
  },
  logo: {
    height: "50px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    margin: "20px 0",
  },
  tableContainer: {
    backgroundColor: "#F5E5E7",
    borderRadius: "15px",
    width: "80%",
    maxWidth: "900px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: "16px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ccc",
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: "center",
  },
  tableBody: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
    marginTop: "20px",
  },
  paginationButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#6EC1E4",
    color: "#fff",
    cursor: "pointer",
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#FFE5EA",
    width: "100%",
    padding: "20px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    textAlign: "center",
  },
  footerColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerLogo: {
    height: "40px",
    marginBottom: "10px",
  },
  feedbackButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#FFE5EA",
    border: "1px solid #ccc",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  socialIcon: {
    width: "30px",
    height: "30px",
  },
  footerCopy: {
    gridColumn: "span 4",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },
};

export default ProviderHome;
