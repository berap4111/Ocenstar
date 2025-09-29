import { useState } from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import "../style/Header.css";
import { services } from "./ServicesItem/Services.js";
import logo from "../assets/image/Logo.png";
import ct1 from "../assets/image/Australian-institute-of-marine-surveyors.webp";
import ct2 from "../assets/image/Dun-bradstreet-dun-registered.webp";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const HightMesuer = "80px"; // Adjust the height as needed

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/About" },
    { label: "OCEANSTAR Shipping", path: "/OceanstarShipping" },
    { label: "OCEANSTAR Ship Holdings", path: "/OcenstarShipHoldings" },
    { label: "OCEANSTAR Trading", path: "/Ocenstartrading" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white py-3 border-bottom vh-40">
        <Container fluid>
          <Row className="align-items-center text-center text-md-start">
            {/* Logo */}
            <Col md={2} xs={12} className="d-flex justify-content-center">
              <img src={logo} alt="Trident Logo" style={{ maxHeight: HightMesuer }} className="w-40" />
            </Col>

            {/* Contact Info */}
            <Col md={2} xs={12} className="d-flex flex-column align-items-center text-center">
              <h6>Contact Us</h6>
              <p className="mb-1">
                <span className="fw-bold">Dubai:</span> +971 527591056
              </p>
            </Col>

            {/* Email + WhatsApp */}
            <Col md={2} xs={12} className="d-flex flex-column align-items-center text-center">
              <h6>Email Us</h6>
              <p className="mb-1">GM@oceanstarmarine.ae</p>
              <p className="mb-0 text-success">
                <BsWhatsapp /> +91 9163234799 <br /> +971503261904
              </p>
            </Col>

            {/* Social Media */}
            <Col md={2} xs={12} className="d-flex flex-column align-items-center text-center">
              <h6>Follow us:</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#"><FaFacebook size={22} /></a>
                <a href="#"><FaLinkedin size={22} /></a>
                <a href="#"><FaInstagram size={22} /></a>
              </div>
            </Col>

            {/* Certificates */}
            <Col md={2} xs={12} className="d-flex justify-content-center justify-content-md-start gap-3">
              <img src={ct2} alt="Certificate" style={{ maxHeight: HightMesuer }} />
            </Col>
            <Col md={2} xs={12} className="d-flex justify-content-center justify-content-md-start gap-3">
              <img src={ct1} alt="Certificate" style={{ maxHeight: HightMesuer }} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Navbar Section */}
      <Navbar expand="lg" className="navbar-modern" sticky="top">
        <Container>
          {/* Animated Hamburger / Toggle Button */}
          <Navbar.Toggle
            aria-controls="main-navbar-collapse"
            onClick={toggleMenu}
            style={{ border: "none" }}
          >
            {menuOpen ? (
              <FaTimes style={{ fontSize: "1.5rem", transition: "0.3s" }} />
            ) : (
              <FaBars style={{ fontSize: "1.5rem", transition: "0.3s" }} />
            )}
          </Navbar.Toggle>

          {/* Collapsible content */}
          <Navbar.Collapse id="main-navbar-collapse">
            <Nav className="justify-content-evenly w-100 text-uppercase">
              {navLinks.map((link, index) => (
                <Nav.Link key={index} as={NavLink} to={link.path}>
                  {link.label}
                </Nav.Link>
              ))}

              <NavDropdown title="Services" id="services-dropdown">
                {services.map((service) => (
                  <NavDropdown.Item
                    key={service.id}
                    as={NavLink}
                    to={service.to}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    <span>{service.icon}</span>
                    <span>{service.text}</span>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Gallery" id="gallery-dropdown">
                <NavDropdown.Item href="#photos">Photos</NavDropdown.Item>
                <NavDropdown.Item href="#videos">Videos</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
