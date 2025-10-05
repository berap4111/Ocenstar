import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "1a22fd9a-d4ad-41c9-a7bc-f6c06943cbe5"); // Replace with your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("✅ Form submitted successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "⚠️ Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Error submitting form. Please try again later.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12}>
            <div
              className="p-4 p-md-5 shadow-lg bg-white rounded-4 border border-light"
              style={{
                transition: "0.3s",
              }}
            >
              <h2 className="text-center text-primary mb-4 fw-bold">
                Contact Us
              </h2>
              <p className="text-center text-muted mb-4">
                Have questions or feedback? Send us a message and we’ll get back
                to you soon.
              </p>

              <Form onSubmit={onSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                      <Form.Label className="fw-semibold">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label className="fw-semibold">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="danger"
                    type="submit"
                    className="fw-semibold py-2 fs-5"
                  >
                    Send Message
                  </Button>
                </div>

                {result && (
                  <div
                    className="alert mt-4 text-center fw-semibold"
                    style={{
                      color: result.includes("successfully")
                        ? "#198754"
                        : "#dc3545",
                    }}
                  >
                    {result}
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
