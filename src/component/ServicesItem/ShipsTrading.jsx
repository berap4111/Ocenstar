import React from 'react'
import ServicePage from "./ServicePage.jsx";

const ShipsTrading = () => {
    const companyAndServiceData = [
  {
    title: "Ships and Boats Trading",
    content: "We specialize in the global trade of marine vessels, offering comprehensive brokerage services for both buyers and sellers of ships and boats. Our expertise ensures a smooth, transparent, and efficient transaction process from initial valuation to final delivery.",
    items: [
      "Vessel valuation and inspection coordination",
      "Sale and purchase agreement negotiation",
      "Global market analysis and consultancy",
      "Management of legal and registration paperwork",
    ],
  },
  {
    title: "We Possess",
    content: "Accredited to the highest industry standards, with a professionally-organized shore based management team, we work closely with clients to achieve the common goal of quality operation. Timely monitoring and reporting is achieved through diligent implementation of Quality Assurance procedures together with the incorporation of innovative marine software solutions as well as regular hands-on inspections. Our main goal is to ensure the vessels we manage are in a good condition and ready to operate anytime, anywhere - to the highest possible performance levels and at the most competitive cost levels.",
    items: [],
  },
  {
    title: "We make sure:",
    content: "",
    items: [
      "to provide quality ship management service",
      "to operate ships in full compliance",
      "to be vigilant at all times",
      "aim to remain at the forefront",
      "endeavour to attain Owners' satisfaction",
    ],
  },
  {
    title: "Glimpse Of Our Way",
    content: "Thoroughly understand the legal relationship between the shipowner and the independent ship manager and the relationship between independent ship managers to cargo interests and third parties. Understand the ship manager's role in handling cargo claims, withdrawal of vessel for great in rem, freezing orders and late hire payment. Understand the ship owner's responsibility for cargo carried by the time charter.\n\nTrident's management division is a small to medium size manager with an “Owners” approach to ship management. The Company tailors its services to meet the needs of the Client and will report in whatever level of detail required by the Client. We are committed to ensuring the management of the Client's assets will always be to the best of our team's ability. We operate using a transparent web based system where the Client has complete access. We maintain the highest levels of safety to its crew, vessels and the environment and is actively involved with various industry groups.\n\nWe have been built to comply with the requirements of the Oil Majors. The staff have worked with the Majors in their vetting/marine department and developed systems that allowed Owners to Time Charter their vessels for Oil Major's business.",
    items: [],
  },
  {
    title: "The TST management department monitors compliance with:",
    content: "",
    items: [
      "Flag Regulations / PSC Inspections",
      "Statutory Regs / SOLAS Amendments & Class Requirements",
      "ISPS Code / Security / Timeline Requirements",
      "Continuous evaluation of TMSA implementation",
      "Environmental / Public Health / Hygiene Requirements",
      "Security / Screening / Liaison with Local Authorities",
      "On Board Pre Vetting Inspections / Audits / Assessments",
    ],
  },
  {
    title: "Our Working Procedure",
    content: "Where a management company is involved, due to the large capital involved in the asset, there is usually a management agreement between the shipowner and the independent management company. This is to avoid any dispute or misunderstanding as it relates to the management of the ship. Every agreement is unique and different depending on what the parties agree on.\n\nPeople are our key asset and our emphasis is on providing the best quality personnel with continuous management support to ensure a successful match between the individual and the organisation.",
    items: [],
  },
];
  return (
    <><ServicePage service={companyAndServiceData} /></>
  )
}

export default ShipsTrading