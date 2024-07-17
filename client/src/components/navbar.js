import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="./golden-swing-1964101_1280.png" alt="Hospital Logo" className="hospital-logo" style={{ height: '40px', marginRight: '10px' }} />
          Careconnect
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/our-services" className="nav-link">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Patient Profile</Link>
            </li>
            <li className="nav-item ms-auto">
              <button className="oval-button" style={{ backgroundColor: "#00008B", color: "#fff" }}>
                <Link to="/login" className="nav-link" style={{ color: "#fff", textDecoration: 'none' }}>Book Appointment</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
