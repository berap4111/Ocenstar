// src/component/About.jsx
import React from "react";
import SectionMapper from "./SectionMapper.jsx";
import ship1 from "../assets/image/Ship1.jpg";
import ship2 from "../assets/image/Ship2.jpg";
import "../style/About.css";
import FlipCard from "./FlipCardContainer.jsx";
import "../style/OcenstarTrading.css"; // Import FlipCard specific styles 

import { productCategories } from './productData.jsx'; 
const ShipHoldings = [
  {
    id: "about-trident",
    title: "Ocenstar Shipping",
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

// Sample data for FlipCards



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

      {/*Trident Drilling Chemicals*/}
      <div className="catalog-container">
      {productCategories.map((category, index) => (
        <section key={index} className="category-section">
          <h2 className="category-title">{category.categoryTitle}</h2>
          <div className="product-grid">
            {category.products.map((product) => (
              <FlipCard
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.description}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
    </main>
  );
};

export default About;
