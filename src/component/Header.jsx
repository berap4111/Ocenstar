import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // optional
import "../style/Header.css";
import logo from "../assets/image/Logo.png";
import ct1 from "../assets/image/Australian-institute-of-marine-surveyors.webp";
import ct2 from "../assets/image/Dun-bradstreet-dun-registered.webp";
export default function Header() {
  //navigation bar
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/About" },
    { label: "OCEANSTAR Shipping", path: "/OceanstarShipping" },
    { label: "OCEANSTAR Ship Holdings", path: "/OcenstarShipHoldings" },
    { label: "OCEANSTAR Trading", path: "/Ocenstartrading" },
  ];

  //services dropdown
  const services = [
    { label: "SHIP OPERATION AND MANAGEMENT", path: "/services/operation" },
    { label: "MANNING AND TECHNICAL MANAGEMENT", path: "/services/manning" },
    { label: "SHIP AUDIT AND INSPECTIONS", path: "/services/audit" },
    { label: "PORT AND TERMINAL OPERATIONS", path: "/services/port" },
    { label: "SHIPPING AND CARGO SERVICES", path: "/services/cargo" },
    { label: "CHARTERING AND TRADING", path: "/services/chartering" },
    { label: "SHIP SALES AND PURCHASE", path: "/services/sales" },
    { label: "CONSULTING SERVICES", path: "/services/consulting" },
    { label: "SHIP RECYCLING AND DEMOLITION", path: "/services/recycling" },
    { label: "SHIP DRY DOCKING", path: "/services/docking" },
    { label: "SHIP REPAIR AND MAINTENANCE", path: "/services/repair" },
    {
      label: "SHIP CARGO HOLD, TANK CLEANING & HULL CLEANING",
      path: "/services/cleaning",
    },
  ];

  const HightMesuer = "80px"; // Adjust the height as needed
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white py-3 border-bottom vh-40  ">
        <Container fluid>
          <Row className="align-items-center text-center text-md-start  ">
            {/* Logo */}
            <Col md={2} xs={12} className="d-flex justify-content-center ">
              <img
                src={logo}
                alt="Trident Logo"
                style={{ maxHeight: HightMesuer }}
                className="w-40 "
              />
            </Col>

            {/* Contact Info */}
            <Col
              md={2}
              xs={12}
              className="d-flex flex-column align-items-center text-center"
            >
              <h6>Contact Us</h6>
              <p className="mb-1">
                <span className="fw-bold">Dubai:</span> +971 527591056 <br />
              </p>
            </Col>

            {/* Email + WhatsApp */}
            <Col
              md={2}
              xs={12}
              className="d-flex flex-column align-items-center text-center"
            >
              <h6>Email Us</h6>
              <p className="mb-1">GM@oceanstarmarine.ae</p>
              <p className="mb-0 text-success">
                <BsWhatsapp /> +91 9163234799 <br /> +971503261904
              </p>
            </Col>

            {/* Social Media */}
            <Col
              md={2}
              xs={12}
              className="d-flex flex-column align-items-center text-center"
            >
              <h6>Follow us:</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#">
                  <FaFacebook size={22} />
                </a>
                <a href="#">
                  <FaLinkedin size={22} />
                </a>
                <a href="#">
                  <FaInstagram size={22} />
                </a>
              </div>
            </Col>

            {/* cirtificate */}
            <Col md={2} xs={12}>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <img
                  src={ct2}
                  alt="Trident Logo"
                  style={{ maxHeight: HightMesuer }}
                />
              </div>
            </Col>

            <Col md={2} xs={12}>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <img
                  src={ct1}
                  alt="Trident Logo"
                  style={{ maxHeight: HightMesuer }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Navbar Section */}
      <Navbar expand="lg" className="navbar-modern" sticky="top">
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          {/* Use justify-content-center and w-100 for better centering */}
          <Nav className="justify-content-evenly w-100 text-uppercase">
            {navLinks.map((link, index) => (
              <Nav.Link key={index} as={NavLink} to={link.path}>
                {link.label}
              </Nav.Link>
            ))}
            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              {services.map((service, index) => (
                <NavDropdown.Item key={index} as={NavLink} to={service.path}>
                  {service.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {/* Gallery Dropdown */}
            <NavDropdown title="Gallery" id="gallery-dropdown">
              <NavDropdown.Item href="#photos">Photos</NavDropdown.Item>
              <NavDropdown.Item href="#videos">Videos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
