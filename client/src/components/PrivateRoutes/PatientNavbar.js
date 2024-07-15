import React from "react";
import Navbar from "../navbar"; // Ensure this is correctly imported and used
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function PatientNavbar() {
    return (
<>
<div className="bg-dark col-auto col-md-4 col-lg-2 min-vh-100 ">
      <a className="text-decoration-none text-white d-flex align-items-center ms-3"> 
        <span className="ms-1 py-2 fs-4">Dashboard</span>                
      </a>
      <hr className="text-secondary d-none d-sm-block" />
      <ul className="nav nav-pills flex-column mt-3">
        <li className="nav-item text-white fs-4 my-1">
          <a href="/patientHome" className="nav-link text-white" aria-current="page">
            <i className="bi bi-house"></i>
            <span className="ms-3 d-none d-sm-inline">Home</span>
          </a>
        </li>
        <li className="nav-item text-white fs-4 my-1 py-2">
          <a href="/my_data" className="nav-link text-white" aria-current="page">
            <i className="bi bi-person"></i>
            <span className="ms-3 d-none d-sm-inline">Account</span>
          </a>
        </li>
        <li className="nav-item text-white fs-4 my-1 py-2">
          <a href="#" className="nav-link text-white" aria-current="page">
            <i className="bi bi-receipt-cutoff"></i>
            <span className="ms-3 d-none d-sm-inline">Bill</span>
          </a>
        </li>
        <li className="nav-item text-white fs-4 my-1 py-2">
          <a href="#" className="nav-link text-white" aria-current="page">
            <i className="bi bi-calendar-date"></i>
            <span className="ms-3 d-none d-sm-inline">Appointments</span>
          </a>
        </li>
      </ul>
    </div> 

</>
    )
}
export default PatientNavbar;
