// src/component/About.jsx
import React from "react";
import SectionMapper from "./SectionMapper.jsx";
import Agriproduce from "../assets/oceanStarTradingImg/Agriproduce.jpg";
import Metalsminerals from "../assets/oceanStarTradingImg/Metalsminerals.jpg";
import "../style/SectionMapper.css";
import FlipCard from "./FlipCard.jsx";
import "../style/OceanstarTrading.css"; // Import FlipCard specific styles

import { productCategories } from "./productData.jsx";
const ShipHoldings = [
  {
    id: "about-Oceanstar",
    title: "METALS & Minerals",
    subtitle: "Delving into our elements",
    image: Metalsminerals,
    imageAlt: "Buoy in the ocean at sunset",
    imageFirst: false,
    content: [
      "We undertake sourcing from almost all metal producing continents and deal with suppliers and customers in Brazil, Columbia, Chile, USA, UK, Denmark, Australia, Vietnam, Pakistan, India, Bangladesh, Philippines, Hong Kong, Thailand, South Africa, Several African Nations, China and UAE.",

      "Our team is present for Physical inspection of containers overseeing stuffing, loading, sealing and transport of containers from warehouses, factories and yards to the Port. We also deploy reputed 3rd party surveyors overseeing the loading to best quality standards and taking photos and videos of all stages of cargo. Slowly and steadily over the years we have built relationships that have led for growth of suppliers and customers alike. We deal in the entire range of raw materials and semi-finished metals such Sponge Iron, Ferrous Scrap including PNS, HMS, LMS, Turnings, Busheling, Bundles, Car Body Scrap and Blue Steel.We also deal in Lead Ingots, Remelted Lead Ingots, Battery Scrap, Lead Shavings, Lead Bullion and other forms of Lead.",
    ],
  },
  {
    id: "welcome-section",
    title: "AGRI PRODUCE",
    subtitle: "We Are The Best",
    image: Agriproduce,
    imageAlt: "Offshore oil rig platform",
    imageFirst: true,
    content: [
      "We also undertake the entire variety of Beans, Pulses and Lentil procurement from Farm to Fork! With complete transparency we are involved in the process of upliftment of farmers and poverty alleviation by procuring directly from the fields to factories and finally to consumers. We have strategic tie-ups and exclusive working arrangements with factories who process the farm produce for us with latest technology and human safety.",

"We have extensive reach in Kenya, Uganda, Tanzania, Ethiopia, Brazil, Benin and Vietnam for our products. We assure and ensure quality produce, product and delivery. We deal in the entire range of Chick Peas, Pigeon Peas, Peanuts, Sesame, Soybean, Kidney Beans, Pinto Beans, Yazuki Beans, Green Mung Beans (Green Gram) and feeds such as Rice Bran, Sunflower Cake amongst others."
    ],
  },
];

// Sample data for FlipCards

const About = () => {
  return (
    <main>
      {/* Hero Header */}
      <header className="hero-banner">
        <div className="container">
          <h1 data-aos="fade-down">Oceanstar ShipHoldings</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Know Us - More Here
          </p>
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
