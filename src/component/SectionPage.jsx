import React from "react";
import "../style/About.css"; // Import styles

const AboutSection = ({ title, subtitle, paragraphs, image, reverse }) => {
  return (
    <section className="about-section">
      <div className="container">
        {title && (
          <div className="section-title-wrapper" data-aos="fade-up">
            <h2>{title}</h2>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
        )}
        <div className={`row align-items-center ${reverse ? "reverse-row" : ""}`}>
          <div className="col-lg-6 text-content" data-aos={reverse ? "fade-right" : "fade-left"} data-aos-delay="200">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="col-lg-6 img-content text-center" data-aos={reverse ? "fade-left" : "fade-right"} data-aos-delay="400">
            <img src={image} alt={title} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
