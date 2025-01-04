import React from "react";

import Login from "./pages/LoginPage";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <div>
      <Navbar />
      <Faqs />
      <Footer />
    </div>
    // <Route path="/login" element={<Login />} />
  );
}

export default App;
