import React, { useEffect, useState } from "react";
import "./OurServices.css"; // Import your CSS file for styling
import Navbar from "./navbar";

function OurServices() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Simulating fetching data from a backend endpoint
    fetch("/services_data")
      .then((r) => r.json())
      .then(setServices);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-cont">
      <Navbar />
      <section className="overview">
        <h1 className="overview-title">Our Services</h1>
        <p className="overview-description">
          Explore our comprehensive range of healthcare services designed to
          meet your needs.
        </p>
      </section>
      <div className="content-wrapper">
        <section className="service-list">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service ${selectedService === service ? "selected" : ""}`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="service-content">
                <h2 className="service-name">{service.name}</h2>
                {selectedService === service && (
                  <p className="service-price">Price: ${service.price}</p>
                )}
              </div>
              <div className="separator"></div>
            </div>
          ))}
        </section>
        <section className="image-section">
          <img
            src="./pexels-shvetsa-4483323.jpg"
            alt="Hospital Image"
            className="hospital-image"
          />
          <img
            src="./pexels-pixabay-236380.jpg"
            alt="Hospital Image"
            className="hospital-image"
          />
          <img
            src="./pexels-shvetsa-3845806.jpg"
            alt="Hospital Image"
            className="hospital-image"
          />
          <img
            src="./pexels-shvetsa-4483327.jpg"
            alt="Hospital Image"
            className="hospital-image"
          />
        </section>
      </div>
    </div>
  );
}

export default OurServices;
