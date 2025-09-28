import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/ServicesSection.css'; // Custom styles for this section
// --- Corrected Imports using camelCase ---
import charteringAndTrading from '../assets/ServiceImage/Chartering-and-trading.webp';
import manningAndTechnicalManagement from '../assets/ServiceImage/Manning-and-technical-management.webp';
import portAndTerminalOperations from '../assets/ServiceImage/Port-and-terminal-operations.webp';
import consultingServices from '../assets/ServiceImage/Consulting-Services.webp'; // Note: consulting-Services.webp has a capital 'S'
import shipRepairAndMaintenance from '../assets/ServiceImage/Ship-repair-and-maintenance.webp';
import shipAuditAndInspections from '../assets/ServiceImage/Ship-audit-and-inspections.webp';
import shippingAndCargoServices from '../assets/ServiceImage/Shipping-and-cargo-services.webp';
import shipRecyclingAndDemolition from '../assets/ServiceImage/Ship-recycling-and-demolition.webp';
import salesAndPurchase from '../assets/ServiceImage/Sales-and-purchase.webp';
import shipDryDocking from '../assets/ServiceImage/Ship-dry-docking.webp';
import shipCargoHoldCleaningServices from '../assets/ServiceImage/Ship-cargo-hold-cleaning-services.webp';
import shipOperationAndManagement from '../assets/ServiceImage/Ship-operation-and-management.webp';






// --- Service Data (using the new camelCase variable names) ---
const services = [
  {
    image: shipOperationAndManagement,
    title: 'Ship Operation And Management',
  },
  {
    image: manningAndTechnicalManagement,
    title: 'Manning And Technical Management',
  },
  {
    image: charteringAndTrading,
    title: 'Chartering And Trading',
  },
  {
    image: portAndTerminalOperations,
    title: 'Port And Terminal Operations',
  },
  {
    image: consultingServices,
    title: 'Consulting Services',
  },
  {
    image: shipRepairAndMaintenance,
    title: 'Ship Repair And Maintenance',
  },
  {
    image: shipAuditAndInspections,
    title: 'Ship Audit And Inspections',
  },
  {
    image: shippingAndCargoServices,
    title: 'Shipping And Cargo Services',
  },
  {
    image: shipRecyclingAndDemolition,
    title: 'Ship Recycling And Demolition',
  },
  {
    image: salesAndPurchase,
    title: 'Sales And Purchase',
  },
  {
    image: shipDryDocking,
    title: 'Ship Dry Docking',
  },
  {
    image: shipCargoHoldCleaningServices, // Using the corrected variable name
    title: 'Ship Cargo Hold, Tank Cleaning & Hull Cleaning', // Title remains the same
  },
];


const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-5 services-title">OUR SERVICES</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <div className="service-item text-center">
                <div className="service-image-wrapper mx-auto mb-3">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <p className="service-title">{service.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

    </section>

    //our Client section
  );
};

export default ServicesSection;