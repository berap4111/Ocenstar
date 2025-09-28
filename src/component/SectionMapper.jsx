// src/component/SectionMapper.jsx
import React from "react";

const SectionMapper = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <section id={section.id} className="content-section" key={section.id}>
          <div className="container">
            <div className="section-title-wrapper" data-aos="fade-up">
              <h2>{section.title}</h2>
              <p className="subtitle">{section.subtitle}</p>
            </div>
            <div className="row align-items-center">
              {section.imageFirst ? (
                <>
                  <div
                    className="col-lg-6 text-center img-content"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <img
                      src={section.image}
                      className="img-fluid"
                      alt={section.imageAlt}
                    />
                  </div>
                  <div
                    className="col-lg-6 text-content"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    {section.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="col-lg-6 text-content"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    {section.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div
                    className="col-lg-6 text-center img-content"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <img
                      src={section.image}
                      className="img-fluid"
                      alt={section.imageAlt}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default SectionMapper;
