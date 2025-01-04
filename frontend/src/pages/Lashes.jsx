import React from "react";

const Lashes = () => {
  const venues = [
    {
      title: "Lashes Extension",
      image: "Lashes_Extension.webp",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Lashes </h1>
        <p style={styles.subtitle}>Choose your services</p>
      </div>
      <div style={styles.row}>
        {venues.map((venue, index) => (
          <div style={styles.cardWrapper} key={index}>
            <div style={styles.card}>
              <div
                style={{
                  ...styles.cardImage,
                  backgroundImage: `url(${venue.image})`,
                }}
              ></div>
              <div style={styles.cardBody}>
                <h5 style={styles.cardTitle}>{venue.title}</h5>
                <p style={styles.cardText}>{venue.services}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#F9C2CD",
    padding: "40px",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center", // Centers the cards section
  },
  header: {
    alignSelf: "flex-start", // Aligns the title and subtitle to the left
    marginLeft: "20px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center", // Ensures the cards are centered
    width: "100%", // Ensures proper centering
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "calc(30% - 20px)", // Adjusts card width
    maxWidth: "600px",
  },
  card: {
    width: "170%",
    borderRadius: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "16px 16px 0 0",
  },
  cardBody: {
    padding: "20px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "14px",
    color: "#777",
  },
};

export default Lashes;
