import axios from "axios";

// Create an Axios instance
const Api = axios.create({
  baseURL: "http://localhost:5500/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include tokens if needed
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor for better error handling
Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Response error:", error.response.data);
    } else {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

// Save Feedback Function
export const saveFeedback = async (feedbackData) => {
  try {
    const response = await Api.post("/feedback/add", feedbackData);
    console.log("Feedback saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error saving feedback:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch Feedbacks Function
export const fetchFeedbacks = async () => {
  try {
    const response = await Api.get("/feedback");
    console.log("Feedbacks fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching feedbacks:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Change Password Function
export const changePassword = async (passwordData) => {
  try {
    const response = await Api.post("/users/changepassword", passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default Api;
