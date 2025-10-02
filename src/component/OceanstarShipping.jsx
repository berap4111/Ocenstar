import React from "react";
import { CRow, CCol } from "@coreui/react";
import Card from "./Card.jsx"; // ✅ your reusable card
import SurveysAudits from "../assets/ShippingImg/RemoteSurveys.jpg";
import ShipRepairs from "../assets/ShippingImg/ShipRepairs.jpg";
import MarineLogistics from "../assets/ShippingImg/MarineLogistics.jpg";

const OceanstarShipping = () => {
  // ✅ card data array
  const cardData = [
    {
      image: SurveysAudits,
      title: "Surveys & Audits",
      text: "We provide high-quality remote surveys for ships. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Learn More",
      buttonLink: "#remote",
    },
    {
      image: ShipRepairs,
      title: "Ship Repairs and Servicing",
      text: "Efficient cargo handling and management solutions.",
      buttonText: "Explore",
      buttonLink: "#cargo",
    },
    {
      image: MarineLogistics,
      title: "Marine Logistics",
      text: "Professional ship operation and management services.",
      buttonText: "Contact Us",
      buttonLink: "#management",
    },
    {
      image: SurveysAudits,
      title: "Other Services",
      text: "Professional ship operation and management services.",
      buttonText: "Contact Us",
      buttonLink: "#management",
    },
    {
      image: SurveysAudits,
      title: "Other Services",
      text: "Professional ship operation and management services.",
      buttonText: "Contact Us",
      buttonLink: "#management",
    },
    {
      image: SurveysAudits,
      title: "Other Services",
      text: "Professional ship operation and management services.",
      buttonText: "Contact Us",
      buttonLink: "#management",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <CRow className="justify-content-center">
        {cardData.map((card, index) => (
          <CCol
            key={index}
            xs={6}   // ✅ 2 cards per row on mobile
            sm={6}   // ✅ 2 cards per row on small screens
            md={4}   // ✅ 3 cards per row on tablets
            lg={3}   // ✅ 4 cards per row on desktop
            className="d-flex justify-content-center"
          >
            <Card
              image={card.image}
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
            />
          </CCol>
        ))}
      </CRow>
    </section>
  );
};

export default OceanstarShipping;
