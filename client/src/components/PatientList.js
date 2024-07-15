import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetch("/patients")
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
        // Clear selectedPatient if the deleted patient was selected
        if (selectedPatient && selectedPatient.id === id) {
          setSelectedPatient(null);
        }
      }
    });
  }

  async function handleUpdate(id) {
    const updatedFields = {};
    updatedFields.first_name = prompt("Enter updated first name:");
    updatedFields.last_name = prompt("Enter updated last name:");
    updatedFields.contact_number = prompt("Enter updated contacts:");
    updatedFields.email = prompt("Enter updated email:");
    // Add more fields as needed

    if (!updatedFields.first_name && !updatedFields.last_name) {
      // Exit early if user cancels or provides no input
      return;
    }

    try {
      const response = await fetch(`/patient/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });

      if (response.ok) {
        console.log("Patient updated successfully!");
        // Optionally update local state or handle response
      } else {
        throw new Error("Failed to update patient");
      }
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  }

  function handlePatientSelect(id) {
    // Fetch patient details by ID and set selectedPatient state
    fetch(`/patient/${id}`)
      .then((r) => r.json())
      .then((patient) => setSelectedPatient(patient))
      .catch((error) => console.error("Error fetching patient:", error));
  }

  return (
    <div className="patients">
      <section className="dropdown">
        <h2>Patients List</h2>
        {/* Dropdown to select patients */}
        <select onChange={(e) => handlePatientSelect(e.target.value)}>
          <option value="">Select a patient</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.first_name} {patient.last_name}
            </option>
          ))}
        </select>

        {/* Display selected patient details */}
        {selectedPatient && (
          <div className="card">
            <h2>
              {selectedPatient.first_name} {selectedPatient.last_name}
            </h2>
            <p>Email: {selectedPatient.email}</p>
            <p>Phone Number: {selectedPatient.contact_number}</p>
            <p>Date of Birth: {selectedPatient.date_of_birth}</p>
            <button onClick={() => handleUpdate(selectedPatient.id)}>Update</button>
            <button onClick={() => handleDelete(selectedPatient.id)}>Delete</button>
          </div>
        )}

      </section>
    </div>
  );
}

export default PatientList;
