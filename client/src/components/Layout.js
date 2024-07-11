import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/staff">Staff</Link></li>
          <li><Link to="/login">Login</Link></li> 
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;