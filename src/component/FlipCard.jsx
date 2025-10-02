import React from "react";
import "../style/FlipCard.css"; // Flip CSS

const FlipCard = ({ image, title, description }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front card text-center">
            <img
              src={image}
              alt={title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{title}</h5>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back card text-center ">
            <div className="p-3 card-body d-flex justify-content-center align-items-center">
              <p className="card-text text-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
