import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container for perspective
const FlipCardContainer = styled(Box)({
  perspective: "1000px",
  width: "300px",
  height: "250px",
  "&:hover .flip-card-inner": {
    transform: "rotateY(180deg)",
  },
});

// Inner box for flipping
const FlipCardInner = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
});

// Front side
const FlipCardFront = styled(Card)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
});

// Back side
const FlipCardBack = styled(Card)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  padding: "1rem",
  backgroundColor: "#1976d2",
  color: "#fff",
  textAlign: "center",
});

const FlipCard = ({ image, title, description }) => {
  return (
    <FlipCardContainer>
      <FlipCardInner className="flip-card-inner">
        {/* Front */}
        <FlipCardFront>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ height: "200px", width: "100%", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="700">
              {title}
            </Typography>
          </CardContent>
        </FlipCardFront>

        {/* Back */}
        <FlipCardBack>
          <Typography variant="body1">{description}</Typography>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
};

export default FlipCard;
