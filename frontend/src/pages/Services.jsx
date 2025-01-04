import React from "react";

const Services = () => {
  const venues = [
    {
      title: "Female Salon",
      services: "5 services",
      image: "female_salon.jpg",
    },
    {
      title: "Female Hair Salon",
      services: "4 services",
      image: "female_hair_salon.jpeg",
    },
    { title: "MakeUp Studio", services: "3 services", image: "makeup.jpeg" },
    { title: "Nail Art", services: "3 services", image: "nail_art.jpg" },
    {
      title: "Female Massage",
      services: "1 service",
      image: "female_massage.png",
    },
    { title: "Lashes", services: "1 service", image: "lashes.jpg" },
  ];

  return (
    <div style={styles.container}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "calc(33.333% - 20px)", // For three cards per row
    maxWidth: "600px",
  },
  card: {
    width: "190%",
    borderRadius: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#D9D9D9",
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

export default Services;
