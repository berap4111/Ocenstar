import React, { useState } from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style/Footer.css';
import { services } from "./ServicesItem/Services.js";

const offices = [
  {
    name: 'Abu Dhabi, UAE',
    addressLines: [
      'Al Ferdous Tower,',
      'K M Trading Building',
      'Office No: 14, 15th Floor',
      'Al Salam Street'
    ],
    phone: '+65 3056 2148'
  }
];

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "1a22fd9a-d4ad-41c9-a7bc-f6c06943cbe5"); // Replace with your key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("Error submitting form.");
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/+919163234799" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        {/* SVG icon */}
      </a>

      <footer className="footer-section">
        <Container>
          <Row className="gy-5">
            {/* Services Column */}
            <Col lg={3} md={6}>
              <h5>Services</h5>
              <Nav className="flex-column">
                {services.map((service) => (
                  <Nav.Link as={NavLink} key={service.href} to={service.to}>
                    {service.text}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            {/* Office Column */}
            <Col lg={4} md={6}>
              <h5>Find Us</h5>
              {offices.map((office) => (
                <div key={office.name} className="office-info mb-3">
                  <h6>{office.name}</h6>
                  <p>{office.addressLines.join(', ')}</p>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                </div>
              ))}
              <div className="map-container">
                <iframe
                  className="map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.957634354271!2d54.3761726759247!3d24.45203387819878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e697c11f67f0b%3A0xa6b7d27e7f22b647!2sAl%20Ferdous%20Tower!5e0!3m2!1sen!2sin!4v1695738838383!5m2!1sen!2sin"
                  title="Location Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>

            {/* Contact Form Column */}
            <Col lg={5} md={12}>
              <h5>Contact Us</h5>
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                      <Form.Control type="text" name="name" placeholder="Your Name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control type="email" name="email" placeholder="Your Email" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                  Send Message
                </Button>
                <span className="d-block mt-2 text-success">{result}</span>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="copyright-bar text-center">
        Copyright © {new Date().getFullYear()} OCEANSTAR MARINE SERVICES & CONTRACTING LLC. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
