import React, { useState, useEffect, useContext } from "react";
import Api from "../apis/Api"; // Adjust the path to where Api.js is located
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await Api.post("/users/login", { email, password });
      setIsLoading(false);

      if (response && response.data && response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userData));
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setError(response.data?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setIsLoading(false);
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.mainContainer}>
        <div style={styles.imageContainer}>
          <img src="login.jpg" alt="Wellness Service" style={styles.image} />
        </div>

        <div style={styles.formContainer}>
          <h2 style={styles.title}>Login</h2>
          <div style={styles.tabs}>
            <p style={{ ...styles.tab, fontWeight: "bold" }}>Login</p>
            <span style={styles.divider}></span>
            <Link to="/signup" style={styles.link}>
              <p style={styles.tab}>Sign Up</p>
            </Link>
          </div>
          <form style={styles.form} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={styles.forgotPasswordContainer}>
              <Link to="/forgotpassword" style={styles.forgotPassword}>
                Forgot Password?
              </Link>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <button
              type="submit"
              style={styles.loginButton}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9C2CD",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
    position: "relative",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7D1D8",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    width: "60%",
    height: "50%",
    padding: "20px",
  },
  imageContainer: {
    flex: 1,
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
  formContainer: {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f8d7da",
    borderRadius: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    fontSize: "16px",
    margin: "0 20px",
    color: "#000",
    cursor: "pointer",
  },
  divider: {
    height: "24px",
    width: "1px",
    backgroundColor: "#000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  forgotPasswordContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "-10px", // Adjust spacing as needed
    marginBottom: "10px",
  },
  forgotPassword: {
    color: "#000",
    fontSize: "14px",
    textDecoration: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "5px",
  },
  loginButton: {
    backgroundColor: "#900c3f",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "10px",
  },
};

export default LoginPage;
