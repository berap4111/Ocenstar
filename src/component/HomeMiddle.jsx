import React from 'react'
import ship4 from "../assets/image/Ship4.jpg";
const homeMiddle  = () => {
  return (
 <div className="container mt-5">
  <h1 className="text-center mb-5 fw-bold">
    TRIDENT SHIPPING & TRADING PTE. LTD.
  </h1>

  <div className="row align-items-center g-4">
    {/* Image Section */}
    <div className="col-lg-6">
      <img 
        src={ship4} 
        alt="Ship" 
        className="img-fluid rounded-2 shadow-sm"
        style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
      />
    </div>

    {/* Text Section */}
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <div className="border p-4 rounded-2 shadow-sm">
        <h2 className="text-center mb-4 fw-semibold">
          Welcome to Ocean Star Marine
        </h2>
        <p className="text-center text-muted mx-auto" style={{ maxWidth: "550px", lineHeight: "1.7" }}>
          Your Trusted Partner in Global Shipping and Maritime Solutions. Since 2010, 
          Ocean Star Marine has been at the forefront of the maritime industry, delivering 
          unparalleled services in ship management, chartering, and maritime consultancy. 
          Our commitment to excellence and customer satisfaction has made us a preferred 
          choice for clients worldwide.
        </p>
        <p className="text-center text-muted mx-auto" style={{ maxWidth: "550px", lineHeight: "1.7" }}>
          With a diverse fleet and a team of seasoned professionals, we ensure that every 
          voyage is executed with precision and care. At Ocean Star Marine, we believe in 
          forging strong partnerships built on trust and transparency, to navigate the 
          complexities of global shipping together. Join us as we sail towards a future of 
          innovation and sustainability in the maritime world.
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default homeMiddle 
