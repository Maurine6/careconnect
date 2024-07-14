import React from "react";
import Navbar from "../navbar";
 function PatientNavbar(){
    return(
        <nav className=" navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active " href="/patient/me"> ME </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/patient/appointments">Appointments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/patient/history">History</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
 }
 export default PatientNavbar;