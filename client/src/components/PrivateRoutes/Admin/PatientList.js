//patientlist
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '/home/ew/Development/code/phase_4/projectweek/careconnect/client/src/components/CSS/PatientList.css';
import AdminNavbar from "./AdminNavbar";
import Button from'react-bootstrap/Button';
import ModalUser from "./UserModal";


function PatientList() {
  const [show, setShow] = useState(false);
  const [singlePatient,setSinglePatient]=useState([]);
  
  const handleClose = () => setShow(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/patients")
      .then((r) => r.json())
      .then(setPatients);
    
  }, []);
  const handleShow = (id) => {
    SinglePatient(id);
    setShow(true);
    
  }
  function SinglePatient(id){
    fetch(`/patient/${id}`)
    .then((r) => r.json())
    .then((data)=> setSinglePatient(data))
    .catch((err) => console.error(err))
  }

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
      <AdminNavbar />
        <section className="container">
            {patients.map((patient) => (
                <div key={patient.id} className="user-card border mx-10 ">
                    <h2>
                        <p>{patient.first_name} {patient.last_name}</p>
                        <Button variant="primary" onClick={()=>{handleShow(patient.id) 
                          console.log(patient.id)}}>Get More info</Button>
                        <ModalUser show={show} handleClose={handleClose} singlePatient={singlePatient} handleDelete={handleDelete} setPatients={setPatients} />
                    </h2>
                </div>
                ))}
        </section>
  </div>
  
  );
}

export default PatientList;