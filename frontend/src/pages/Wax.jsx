import React from "react";

const Wax = () => {
  const services = [
    {
      title: "Full Arms & Underarms Wax",
      price: "NRs 1000",
      description: [
        "Wax for smooth & shiny arms and underarms",
        "Recommended for all skin types",
      ],
      image: "full_arms&underarm_wax.jpg",
    },
    {
      title: "Full Body Wax",
      price: "NRs 3500",
      description: [
        "Wax for smooth & shiny skin",
        "Full body is covered except bikini area",
      ],
      image: "full_body_wax.jpg",
    },
    {
      title: "Full Arms Full Legs & Underarms Wax",
      price: "NRs 2000",
      description: [
        "Wax for smooth & shiny skin",
        "Covers entire legs, arms, and underarms",
      ],
      image: "Full_Arms_Full_Legs&Underarms-Wax.webp",
    },
    {
      title: "Back Wax",
      price: "NRs 1000",
      description: [
        "Wax for smooth & shiny back area",
        "Recommended for all skin types",
      ],
      image: "back_wax.webp",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Waxing Services</h1>
      </div>
      <div style={styles.row}>
        {services.map((service, index) => (
          <div style={styles.card} key={index}>
            <div style={styles.cardContent}>
              <div
                style={{
                  ...styles.imageWrapper,
                  backgroundImage: `url(${service.image})`,
                }}
              ></div>
              <div style={styles.textWrapper}>
                <h5 style={styles.cardTitle}>{service.title}</h5>
                <p style={styles.price}>{service.price}</p>
                <ul style={styles.description}>
                  {service.description.map((item, i) => (
                    <li key={i} style={styles.descriptionItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <button style={styles.button}>Book Now</button>
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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  header: {
    marginBottom: "20px",
    paddingLeft: "20px",
  },
  title: {
    fontSize: "33px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    display: "flex",
    width: "600px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  imageWrapper: {
    width: "230px",
    height: "120px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    marginRight: "20px",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0px", // Tight gap between title and price
  },
  price: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#E91E63",
    marginBottom: "0px", // Tight gap between price and description
  },
  description: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "8px", // Slightly reduced gap before the button
  },
  descriptionItem: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "0px", // Reduced spacing between list items
  },
  button: {
    backgroundColor: "#E91E63",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    fontSize: "14px",
    alignSelf: "flex-start",
  },
};

export default Wax;
