import React from "react";
import { Routes, Route } from "react-router-dom";
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
import LongLastingGelPolish from "./pages/LongLastingGelPolish";
import NailExtension from "./pages/NailExtension";
import GelRemove from "./pages/GelRemove";
import Massage from "./pages/Massage";
import LashesExtension from "./pages/LashesExtension";
import BeOurBeautician from "./pages/BeOurBeautician";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import UserProfile from "./pages/UserProfile";
import FeedbackForm from "./pages/FeedbackForm";
import { AuthProvider } from "./context/authContext";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import ProviderHome from "./pages/Provider/ProviderHome";
import MyBookings from "./pages/MyBookings";
import AllBookings from "./pages/AllBookings";

function App() {
  return (
    <>
      {" "}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/beourbeautician" element={<BeOurBeautician />} />
          <Route path="/beourbeautician" element={<BeOurBeautician />} />
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
          <Route path="/makeupstudio" element={<MakeupStudio />} />
          <Route path="/makeuppackage" element={<MakeupPackage />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/hairstyling" element={<HairStyling />} />
          <Route path="/nailart" element={<NailArt />} />
          <Route
            path="/longlastinggelpolish"
            element={<LongLastingGelPolish />}
          />
          <Route path="/nailextension" element={<NailExtension />} />
          <Route path="/gelremove" element={<GelRemove />} />
          <Route path="/femalemassage" element={<FemaleMassage />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/lashes" element={<Lashes />} />
          <Route path="/lashesextension" element={<LashesExtension />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/providerhome" element={<ProviderHome />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/allbookings" element={<AllBookings />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
