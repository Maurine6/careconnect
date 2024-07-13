import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services_offered">services offered</Link></li>
          <li><Link to="/login">Login</Link></li> 
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/about-us">About Us</Link></li> 
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;