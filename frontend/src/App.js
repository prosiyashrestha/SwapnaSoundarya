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
import ManicurePedicure from "./pages/Manicure&Pedicure";
import FacialCleanup from "./pages/Facial&Cleanup";
import Threading from "./pages/Threading";
import HaircareMassage from "./pages/Haircare&Massage";
import HaircutAndStyle from "./pages/Haircut&Style";
import HairSpa from "./pages/HairSpa";
import Keratin from "./pages/Keratin";
import HairStraight from "./pages/HairStraight";
import MakeupPackage from "./pages/MakeupPackage";
import Makeup from "./pages/Makeup";
import HairStyling from "./pages/HairStyling";

function App() {
  return (
    <div>
      <Navbar />
      <HairStyling />
      <Footer />
    </div>
    // <Route path="/login" element={<Login />} />
  );
}

export default App;
