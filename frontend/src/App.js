import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/authContext";

// Pages
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import FeedbackForm from "./pages/FeedbackForm";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import BeOurBeautician from "./pages/BeOurBeautician";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import ProviderHome from "./pages/Provider/ProviderHome";
import MyBookings from "./pages/MyBookings";
import AllBookings from "./pages/AllBookings";
import Profile from "./pages/Profile";

// Female Salon Pages
import FemaleSalon from "./pages/FemaleSalon";
import Wax from "./pages/Wax";
import ManicurePedicure from "./pages/Manicure&Pedicure";
import FacialCleanup from "./pages/Facial&Cleanup";
import Threading from "./pages/Threading";
import HaircareMassage from "./pages/Haircare&Massage";
import FemaleHairSalon from "./pages/FemaleHairSalon";
import HaircutAndStyle from "./pages/Haircut&Style";
import HairSpa from "./pages/HairSpa";
import Keratin from "./pages/Keratin";
import HairStraight from "./pages/HairStraight";

// Makeup Studio Pages
import MakeupStudio from "./pages/MakeupStudio";
import MakeupPackage from "./pages/MakeupPackage";
import Makeup from "./pages/Makeup";
import HairStyling from "./pages/HairStyling";

// Nail Art Pages
import NailArt from "./pages/NailArt";
import LongLastingGelPolish from "./pages/LongLastingGelPolish";
import NailExtension from "./pages/NailExtension";
import GelRemove from "./pages/GelRemove";

// Other Services
import FemaleMassage from "./pages/FemaleMassage";
import Massage from "./pages/Massage";
import Lashes from "./pages/Lashes";
import LashesExtension from "./pages/LashesExtension";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/beourbeautician" element={<BeOurBeautician />} />
        <Route path="/feedback" element={<FeedbackForm />} />

        {/* Female Salon Routes */}
        <Route path="/femalesalon" element={<FemaleSalon />} />
        <Route path="/wax" element={<Wax />} />
        <Route path="/manipedi" element={<ManicurePedicure />} />
        <Route path="/facialcleanup" element={<FacialCleanup />} />
        <Route path="/threading" element={<Threading />} />
        <Route path="/haircaremassage" element={<HaircareMassage />} />
        <Route path="/femalehairsalon" element={<FemaleHairSalon />} />
        <Route path="/haircutstyle" element={<HaircutAndStyle />} />
        <Route path="/hairspa" element={<HairSpa />} />
        <Route path="/keratin" element={<Keratin />} />
        <Route path="/hairstraight" element={<HairStraight />} />

        {/* Makeup Studio Routes */}
        <Route path="/makeupstudio" element={<MakeupStudio />} />
        <Route path="/makeuppackage" element={<MakeupPackage />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/hairstyling" element={<HairStyling />} />

        {/* Nail Art Routes */}
        <Route path="/nailart" element={<NailArt />} />
        <Route
          path="/longlastinggelpolish"
          element={<LongLastingGelPolish />}
        />
        <Route path="/nailextension" element={<NailExtension />} />
        <Route path="/gelremove" element={<GelRemove />} />

        {/* Other Services */}
        <Route path="/femalemassage" element={<FemaleMassage />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/lashes" element={<Lashes />} />
        <Route path="/lashesextension" element={<LashesExtension />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/providerhome" element={<ProviderHome />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/allbookings" element={<AllBookings />} />

        {/* Fallback Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
};

export default App;
