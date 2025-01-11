import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";

const HairSpa = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      title: "Hair Spa & Blowdry Styling",
      category: "Female Hair Salon",
      subCategory: "Hair Spa",
      price: "NRs 2000",
      description: ["Hair spa with blowdry styling included"],
      image: "Hair_Spa&Blowdry_Styling.jpg",
    },
    {
      title: "Hair Spa with Blowdry ",
      category: "Female Hair Salon",
      subCategory: "Hair Spa",
      price: "NRs 1500",
      description: [
        "6 steps repair treatment to revive & straighten damaged hair",
        "Steam therapy included",
      ],
      image: "HairSpawithBlowdry.jpg",
    },
    {
      title: "Head, Neck and Shoulder Massage",
      category: "Female Hair Salon",
      subCategory: "Hair Spa",
      price: "NRs 1000",
      description: ["Specially curated techniques to eliminate stress"],
      image: "Head_NeckandShoulder_Massage.jpg",
    },
  ];

  const handleBookNow = (service) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser); // Set the logged-in user
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
        <h1 style={styles.title}>Hair Spa Services</h1>
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
    fontWeight: "normal",
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
  paymentIcon: { width: "20px", height: "20px" },
  locationDropdown: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  buttonGroup: { display: "flex", justifyContent: "space-between" },
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

export default HairSpa;
