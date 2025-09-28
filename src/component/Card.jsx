import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";

// ✅ Stylish Reusable Card Component
const Card = ({ image, title, text, buttonText, buttonLink }) => {
  return (
    <CCard
      style={{
        width: "18rem",
        margin: "1rem",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      className="card-hover"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
      }}
    >
      <CCardImage
        orientation="top"
        src={image}
        style={{
          height: "300px",
          objectFit: "cover",
        }}
      />
      <CCardBody>
        <CCardTitle style={{ fontWeight: "700", fontSize: "1.25rem" }}>
          {title}
        </CCardTitle>
        <CCardText style={{ color: "#555", fontSize: "0.95rem", margin: "0.5rem 0" }}>
          {text}
        </CCardText>
        <CButton
          color="primary"
          href={buttonLink}
          style={{
            borderRadius: "50px",
            padding: "0.5rem 1.5rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          {buttonText}
        </CButton>
      </CCardBody>
    </CCard>
  );
};

export default Card;
