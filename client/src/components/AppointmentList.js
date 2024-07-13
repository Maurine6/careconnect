//appointments
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/appointments")
      .then((r) => r.json())
      .then(setAppointments);
  }, []);

  return (
    <div>
      <section className="container">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="card">
            <h2>
              <Link to={`/appointments/${appointment.id}`}>
                Appointment - {appointment.id}
              </Link>
            </h2>
            <p>Patient ID: {appointment.patient_id}</p>
            <p>Doctor ID: {appointment.doctor_id}</p>
            <p>Status: {appointment.status}</p>
            <p>Date: {new Date(appointment.appointment_date).toLocaleString()}</p>
            <p>Reason: {appointment.reason}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AppointmentList;