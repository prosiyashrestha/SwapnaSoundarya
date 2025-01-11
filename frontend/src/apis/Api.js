import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5500/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include tokens if needed
Api.interceptors.request.use((config) => {
  // Example: Attach token
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;
