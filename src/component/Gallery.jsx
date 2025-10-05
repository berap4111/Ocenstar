import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";

const images = [img1, img2];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="d-flex gap-3 flex-wrap">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Gallery ${i}`}
          style={{ width: "200px", cursor: "pointer" }}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
        />
      ))}

      {open && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </div>
  );
};

export default Gallery;
