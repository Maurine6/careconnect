import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    fetch("/appointments")
      .then((r) => r.json())
      .then(setAppointments)
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  function handleDropdownChange(event) {
    const selectedId = event.target.value;
    const selected = appointments.find(appointment => appointment.id === parseInt(selectedId));
    setSelectedAppointment(selected);
  }

  return (
    <div>
      <div className="dropdown">
        <h1>Appointments</h1>
        <select onChange={handleDropdownChange}>
          <option value="">Select an appointment</option>
          {appointments.map((appointment) => (
            <option key={appointment.id} value={appointment.id}>
              Appointment - {appointment.id}
            </option>
          ))}
        </select>
      </div>
      {selectedAppointment && (
        <section className="container">
          <div className="card">
            <h2>Appointment - {selectedAppointment.id}</h2>
            <p>Patient ID: {selectedAppointment.patient_id}</p>
            <p>Doctor ID: {selectedAppointment.doctor_id}</p>
            <p>Status: {selectedAppointment.status}</p>
            <p>Date: {new Date(selectedAppointment.appointment_date).toLocaleString()}</p>
            <p>Reason: {selectedAppointment.reason}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default AppointmentList;
