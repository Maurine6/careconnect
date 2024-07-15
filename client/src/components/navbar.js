import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className="navbar navbar-expand-sm bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">Careconnect</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto"> <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link> </li>
        <li className="nav-item">
          <Link to="/services_offered" className="nav-link">Services Offered</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Signup</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;