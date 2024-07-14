//patientlist
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/patients")
      .then((r) => r.json())
      .then(setPatients);
  }, []);

  function handleDelete(id) {
    fetch(`/patient/<int:patient_id>`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setPatients((patients) =>
          patients.filter((patient) => patient.id !== id)
        );
      }
    });
  }

  return (
    <div>
    <h1 style={{ textAlign: 'center', color: 'darkblue' }}>Our Patients Corner</h1> 
      <div className="feature">
          <img src="/hospital.jpg" alt="Efficient Management" className="feature-image" />
          <h3>Efficient Management</h3>
          <p>Streamline operations and improve efficiency with our tools.</p>
        </div>
        <div className="bg">
          <img src="/pexels-fr3nks-305568.jpg" alt="Efficient Management" className="bg-image" />
          <h3>Efficient Management</h3>
          <p>Streamline operations and improve efficiency with our tools.</p>
        </div>
        <section className="container">
            {patients.map((patient) => (
                <div key={patient.id} className="card">
                    <h2>
                        <Link to={`/patient/${patient.id}`}>{patient.first_name} {patient.last_name}</Link>
                    </h2>
                    <p>Name: {patient.first_name} {patient.last_name}</p>
                    <button onClick={() => handleDelete(patient.id)}>Delete</button>
                </div>
                ))}
        </section>
  </div>
  
  );
}

export default PatientList;