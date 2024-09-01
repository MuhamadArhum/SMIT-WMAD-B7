import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-regular fa-code",
      title: "WEB DEVELOPER",
      desc: "I am a skilled Web Developer with 01 years of experience in designing, developing, and maintaining websites and web applications.creating visually appealing, user-friendly.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "APP DEVELOPER",
      desc: "As an innovative and detail-oriented App Developer, I have 01 years of experience designing, developing, and deploying mobile applications for both Android and iOS platforms. ",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "SOFTWERE ENGINIRING",
      desc: "developing, and maintaining robust software solutions.My expertise spans across various domains, including web development, mobile app development, and backend systems, with a strong focus.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>01</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>10+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>01</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>10+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>05</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;