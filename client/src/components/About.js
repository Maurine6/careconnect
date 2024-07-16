import React, { useEffect, useState } from "react";
import "./About.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      ); // Adjust this number based on the number of images
    }, 3000); // Adjust the time interval (in milliseconds) between image changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <Navbar />
      <h1 className="about-title">CareConnect</h1>
      <div className="about-content">
        <div className="services-section">
          <div className="services-title">
            <p>
              CareConnect is a comprehensive healthcare facility dedicated to
              providing high-quality medical services to our patients. Our
              mission is to modernize healthcare operations and improve patient
              care through innovative solutions.
            </p>
            <p>
              We offer a wide range of services designed to meet the diverse
              needs of our community. Our team of experienced healthcare
              professionals is committed to delivering personalized care and
              ensuring that every patient has a positive experience.
            </p>
          </div>
          <div className="services-offered">
            <h2>Services Offered</h2>
            <ul className="services-list">
              <li className="service-item">General Medicine</li>
              <li className="service-item">Pediatrics</li>
              <li className="service-item">Gynecology</li>
              <li className="service-item">Cardiology</li>
              <li className="service-item">Orthopedics</li>
              <li className="service-item">Dermatology</li>
              <li className="service-item">Radiology</li>
              <li className="service-item">Surgical Services</li>
              <li className="service-item">Laboratory Services</li>
              <li className="service-item">Pharmacy</li>
            </ul>
          </div>
          <button className="button" style={{ backgroundColor: "#00008B", color: "white" }}>
            <Link to="/my_data">Book Appointment</Link>
            </button>
        </div>
        <div className="changing-pictures">
          <div className={`changing-picture ${activeIndex === 0 ? "active" : ""}`}>
            <img src="/pexels-shvetsa-4483323.jpg" alt="Placeholder 1" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
