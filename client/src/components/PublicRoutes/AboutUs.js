// src/components/AboutUs.js

import React from 'react';
import Navbar from '../navbar';


const AboutUs = () => {
  return (
    <div>
      <Navbar/>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Careconnect is dedicated to providing a comprehensive healthcare facility management system.
        Our mission is to streamline healthcare operations and improve patient care through innovative technology solutions.
      </p>
      <p>
        Our team of experts is committed to delivering the best possible service and support to healthcare providers.
      </p>
      <div className="team-image">
        <img src="path-to-team-image.jpg" alt="Our Team" />
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
