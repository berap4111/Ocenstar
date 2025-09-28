import React from "react";
import Card from "./Card.jsx"; // import reusable card
import SurveysAudits from "../assets/ShippingImg/RemoteSurveys.jpg"
import ShipRepairs from "../assets/ShippingImg/ShipRepairs.jpg"
import MarineLogistics from "../assets/ShippingImg/MarineLogistics.jpg"


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
      title: "Marine logistics",
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
    <div className="d-flex flex-wrap justify-content-center">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};

export default OceanstarShipping;
