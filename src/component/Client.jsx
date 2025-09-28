// Client logos
import anl from "../assets/ClientLogo/anl.webp";
import clipper from "../assets/ClientLogo/clipper.webp";
import epicGas from "../assets/ClientLogo/epic-gas.webp";
import fleet from "../assets/ClientLogo/fleet-management-limited.webp";
import maersk from "../assets/ClientLogo/maersk-tankers.webp";
import norden from "../assets/ClientLogo/norden.webp";
import stolt from "../assets/ClientLogo/stolt-nielsen-limited.webp";

// Import the corresponding CSS file
import "../style/Client.css";

// Create an array of logo objects for better data handling
const logos = [
  { src: anl, name: "ANL" },
  { src: clipper, name: "Clipper" },
  { src: epicGas, name: "Epic Gas" },
  { src: fleet, name: "Fleet Management Limited" },
  { src: maersk, name: "Maersk Tankers" },
  { src: norden, name: "Norden" },
  { src: stolt, name: "Stolt Nielsen Limited" },
];

export default function Client() {
  return (
    // 1. Added the "logo-section" class to the outer section
    <section className="logo-section">
      <div className="container-fluid">
        {/* 2. This is the viewport with the fade effect */}
        <div className="logo-slider">
          {/* 3. CRITICAL FIX: Added the "logo-track" div to be the moving element */}
          <div className="logo-track">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <img
                key={`logo-${index}`}
                src={logo.src}
                alt={logo.name}
                className="logo" // 4. Removed Bootstrap margin class to let CSS handle spacing
              />
            ))}
            {/* DUPLICATED set of logos for the seamless loop */}
            {logos.map((logo, index) => (
              <img
                key={`repeat-logo-${index}`}
                src={logo.src}
                alt={logo.name}
                className="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
