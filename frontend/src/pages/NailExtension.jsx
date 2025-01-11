import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";

const NailExtension = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      title: "Gel Nail Extension",
      category: "Nail Art",
      subCategory: "Nail Extension",
      price: "NRs 2400",
      description: [
        "Durable gel-based nail extension for long-lasting beauty",
        "Customizable designs and styles",
      ],
      image: "GelNailExtension.png",
    },
    {
      title: "Toe Nail Extension",
      category: "Nail Art",
      subCategory: "Nail Extension",
      price: "NRs 2500",
      description: [
        "Enhance toe nails with professional extensions",
        "Perfect for all occasions",
      ],
      image: "ToeNailExtension.jpeg",
    },
  ];

  const handleBookNow = (service) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
      setSelectedProduct(service);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Nail Extension Services</h1>
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
                <button
                  style={styles.button}
                  onClick={() => handleBookNow(service)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedProduct && user && (
        <BookingModal
          service={selectedProduct}
          user={user}
          onClose={handleCloseModal}
        />
      )}
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
    backgroundColor: "#D9D9D9",
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
    marginBottom: "0px",
  },
  price: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#E91E63",
    marginBottom: "8px",
  },
  description: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "8px",
  },
  descriptionItem: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "0px",
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

export default NailExtension;
