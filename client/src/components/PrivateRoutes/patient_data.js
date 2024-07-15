import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientNavbar from './PatientNavbar';
import '../CSS/PatientPage.css'
import {Nav} from 'react-bootstrap'

const SinglePatient = () => {
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatientData = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await fetch('/patient/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setPatientData(data);
          console.log(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (err) {
        setError('An error occurred while fetching the data');
      }
    };

    fetchPatientData();
  }, [navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
  <div className='container-fluid mt-3'>
  <div className='row'>
    <PatientNavbar/>                   
    <div className='col'>
      <h1>Heres my info</h1>
    </div>
  </div>
</div>

  );
};

export default SinglePatient;
