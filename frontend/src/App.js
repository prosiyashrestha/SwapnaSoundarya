import React from "react";

import Login from "./pages/LoginPage";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import FemaleSalon from "./pages/FemaleSalon";
import FemaleHairSalon from "./pages/FemaleHairSalon";
import MakeupStudio from "./pages/MakeupStudio";
import NailArt from "./pages/NailArt";
import FemaleMassage from "./pages/FemaleMassage";
import Lashes from "./pages/Lashes";
import Wax from "./pages/Wax";

function App() {
  return (
    <div>
      <Navbar />
      <Wax />
      <Footer />
    </div>
    // <Route path="/login" element={<Login />} />
  );
}

export default App;
