// src/component/About.jsx
import React from "react";
import SectionMapper from "./SectionMapper";
import ship1 from "../assets/image/Ship1.jpg";
import ship2 from "../assets/image/Ship2.jpg";
import "../style/About.css";

const ShipHoldings = [
  {
    id: "about-trident",
    title: "About Trident Shipping",
    subtitle: "Delving into our elements",
    image: ship2,
    imageAlt: "Buoy in the ocean at sunset",
    imageFirst: false,
    content: [
      "Trident Shipping & Trading is the Organization Managed By Highly Trained Individuals of Professional Orientation with a Passion For The Industry...",
      "Our international network of partners have been hand selected providing a high standard of services..."
    ]
  },
  {
    id: "welcome-section",
    title: "Welcome to Industry",
    subtitle: "We Are The Best",
    image: ship1,
    imageAlt: "Offshore oil rig platform",
    imageFirst: true,
    content: [
      "We endeavour to develop greater value and work ethics...",
      "We understand our customers requirements and needs accordingly we provide appropriate & exemplary services..."
    ]
  }
];

const About = () => {
  return (
    <main>
      {/* Hero Header */}
      <header className="hero-banner">
        <div className="container">
          <h1 data-aos="fade-down">Ocenstar ShipHoldings</h1>
          <p data-aos="fade-up" data-aos-delay="200">Know Us - More Here</p>
        </div>
      </header>

      {/* Reusable Section Mapper */}
      <SectionMapper sections={ShipHoldings} />
    </main>
  );
};

export default About;
