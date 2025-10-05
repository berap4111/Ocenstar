import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (includes Popper)
// Layout Components
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import ContactUs from "./component/ContactUs.jsx";

// Home Page Sections
import Carousel from "./component/ImageCarousel.jsx";
import HomeMiddle from "./component/HomeMiddle.jsx";
import ServicesSection from "./component/ServicesSection.jsx";
import Client from "./component/Client.jsx";

// Pages
import About from "./component/About.jsx";
import OceanstarShipping from "./component/OceanstarShipping.jsx";
import OceanstarTrading from "./component/OceanstarTrading.jsx";

// Service Item Pages
import ShipsTrading from "./component/ServicesItem/ShipsTrading.jsx";

function App() {
  return (
    <>
      {/* Header is always visible */}
      <Header />

      {/* Define routes for different pages */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <HomeMiddle />
              <ServicesSection />
              <Client />
            </>
          }
        />

        {/* About Page */}
        <Route path="/About" element={<About />} />
        <Route path="/OceanstarShipping" element={<OceanstarShipping />} />
        {/* Contact Us Page */}
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* Add more routes as needed */}
        <Route path="/OceanstarTrading" element={<OceanstarTrading />} />
        {/* Service Item Page with dynamic routing */}
        <Route path="/services/ships-trading" element={<ShipsTrading />} />
        {/* 404 - Page Not Found */}
        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </>
  );
}

export default App;
