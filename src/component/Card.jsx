import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css"; // optional for extra hover styles

const Card = ({ image, title, text, buttonText, buttonLink }) => {
  return (
    <div className="card card-hover m-2" style={{ width: "250px", height: "380px", borderRadius: "12px", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "140px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between text-center">
        <div>
          <h5 className="card-title fw-bold" style={{ fontSize: "1rem" }}>{title}</h5>
          <p className="card-text text-muted" style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>{text}</p>
        </div>
        <a href={buttonLink} className="btn btn-primary" style={{ borderRadius: "25px", padding: "0.4rem 1rem", fontWeight: "600", fontSize: "0.85rem" }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
