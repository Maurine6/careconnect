import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Appointments() {
  const [appoinments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/appoinments")
      .then((r) => r.json())
      .then(setAppointments);
  }, []);
  return (
    <div>
        <section className="container">
            {appoinments.map((appointment) => (
                <div key={appointment.id} className="card">
                    <h2>
                        <Link to={`/appointments/${appointment.id}`}>{appointment.first_name} {appointment.last_name}</Link>
                    </h2>
                    <p>Name: {appointment.first_name} {appointment.last_name}</p>
                </div>
                ))}
        </section>
  </div>
  
  );
}

export default Appointments;
