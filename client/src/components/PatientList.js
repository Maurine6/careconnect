import React from "react";
import { useEffect, useState } from "react";


function Services() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/patient")
      .then((r) => r.json())
      .then(setPatients);
  }, []);

  function handleDelete(id) {
    fetch(`/patient/${id}`, {
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
        <section className="container">
            {patients.map((patient) => (
                <div key={patient.id} className="card">
                    <h2>
                        <Link to={`/patient/${patient.id}`}>{patient.first_name} {last_name}</Link>
                    </h2>
                    <p>Name: {patient.first_name} {last_name}</p>
                    <button onClick={() => handleDelete(patient.id)}>Delete</button>
                </div>
                ))}
        </section>
  </div>
  
  );
}

export default Services;
