import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5500/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include tokens if needed
Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Save Feedback Function
export const saveFeedback = async (feedbackData) => {
  try {
    const response = await Api.post("/feedback/add", feedbackData);
    console.log("Feedback saved successfully!");
    return response.data; // Return saved feedback data if needed
  } catch (error) {
    console.error("Error saving feedback:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch Feedbacks Function
export const fetchFeedbacks = async () => {
  try {
    const response = await Api.get("/feedback");
    return response.data; // Return the feedback list
  } catch (error) {
    console.error("Error fetching feedbacks:", error.response?.data || error.message);
    throw error;
  }
};

export default Api;
