import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isProvider, setIsProvider] = useState(false);

  useEffect(() => {
    // Check if user is logged in and if they are a provider
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!token); // Set true if token exists
    setIsProvider(user?.provider || false); // Check if user is a provider
  }, [showDropdown, isLoggedIn]); // Re-run the check when the dropdown state changes

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setShowDropdown(false);
    setShowLogoutModal(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.navItem}>
          <img src="logo.png" alt="Swapna Soundarya Logo" style={styles.logo} />
        </div>

        {!isLoggedIn || !isProvider ? (
          <>
            <nav style={styles.nav}>
              <Link to="/" style={styles.navItem}>
                Home
              </Link>

              <Link to="/services" style={styles.navItem}>
                Services
              </Link>

              <Link to="/aboutus" style={styles.navItem}>
                About Us
              </Link>

              <Link to="/faqs" style={styles.navItem}>
                FAQs
              </Link>

              <Link to="/beourbeautician" style={styles.navItem}>
                Be Our Beautician
              </Link>
            </nav>

            <div style={styles.navItem} onClick={toggleDropdown}>
              <img
                src="user.png"
                alt="User Icon"
                style={styles.userIconImage}
              />
              {showDropdown && (
                <div style={styles.dropdown}>
                  {isLoggedIn ? (
                    <>
                      <Link to="/userprofile" style={styles.dropdownItem}>
                        Profile
                      </Link>
                      <hr style={styles.divider} />
                      <Link to="/changepassword" style={styles.dropdownItem}>
                        Change Password
                      </Link>
                      <hr style={styles.divider} />
                      <Link to="/mybookings" style={styles.dropdownItem}>
                        My Bookings
                      </Link>
                      <hr style={styles.divider} />
                      <div style={styles.dropdownItem} onClick={handleLogout}>
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/login" style={styles.dropdownItem}>
                        Login
                      </Link>
                      <hr style={styles.divider} />
                      <Link to="/signup" style={styles.dropdownItem}>
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <nav style={styles.nav}>
            <Link to="/allbookings" style={styles.navItem}>
              Service Requests
            </Link>
            <Link to="/userprofile" style={styles.navItem}>
              Profile
            </Link>
            <div style={styles.navItem} onClick={handleLogout}>
              Logout
            </div>
          </nav>
        )}
      </header>

      {showLogoutModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalText}>Are you sure you want to log out?</h2>
            <div style={styles.modalActions}>
              <button style={styles.yesButton} onClick={confirmLogout}>
                Yes
              </button>
              <button style={styles.noButton} onClick={cancelLogout}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8d7da",
    padding: "10px 40px",
    borderBottom: "1px solid #ccc",
  },
  navItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
    position: "relative",
  },
  logo: {
    height: "110px",
  },
  nav: {
    display: "flex",
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  userIconImage: {
    height: "40px",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    right: "0",
    backgroundColor: "#f8d7da",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "200px",
    zIndex: "1000",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  dropdownItem: {
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 0",
    textAlign: "left",
    cursor: "pointer",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "5px 0",
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
    zIndex: "2000",
  },
  modal: {
    backgroundColor: "#ffe5ea",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  modalText: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  modalActions: {
    display: "flex",
    justifyContent: "space-around",
  },
  yesButton: {
    backgroundColor: "#6ecc77",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  noButton: {
    backgroundColor: "#f38181",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Navbar;
