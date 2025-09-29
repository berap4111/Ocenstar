import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import '../style/Footer.css';
import { NavLink } from 'react-router-dom';
// This component assumes you have react-bootstrap and bootstrap CSS installed and configured in your project.
// npm install react-bootstrap bootstrap
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
  return (
    <>
      

      <a href="https://wa.me/+919163234799" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943s-.182-.15-.38-.25z"/>
          </svg>
      </a>
      
      <footer className="footer-section">
        <Container>
          <Row className="gy-5">
            <Col lg={3} md={6}>
              <h5>Services</h5>
              <Nav className="flex-column">
                {services.map((service) => (
                  <Nav.Link as={NavLink} key={service.href} href={service.to}>
                    {service.text}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            <Col lg={4} md={6}>
              <h5>Find Us</h5>
              {offices.map((office) => (
                <div  key={office.name} className="office-info">
                  <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill text-danger me-3" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <div>
                      <h6>{office.name}</h6>
                      <p>{office.addressLines.join(', ')}</p>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="map-container">
                <iframe
    className="map-iframe"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.957634354271!2d54.3761726759247!3d24.45203387819878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e697c11f67f0b%3A0xa6b7d27e7f22b647!2sAl%20Ferdous%20Tower%20-%20Al%20Salam%20Street%20-%20Zone%201%20-%20E10-02%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1695738838383!5m2!1sen!2sin"
    title="Location Map"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">
</iframe>
              </div>
            </Col>

            <Col lg={5} md={12}>
              <h5>Contact Us</h5>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copyright-bar text-center ">
        Copyright © {new Date().getFullYear()} OCEANSTAR MARINE SERVICES & CONTRACTING LLC. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

