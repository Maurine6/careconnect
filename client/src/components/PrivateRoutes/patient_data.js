import React,{useState,useEffect} from "react";

function Patient_home_Component(){
    const [patientData, setPatientData] = useState([]);

    // fetch patient data from API
    useEffect(() => {
        fetchPatientData();
    }, []);  // fetch patient data only when component mounts or patient data changes

    useEffect(() => {
        return () => {
            // cleanup function
        }
    }, []);  // cleanup function to prevent memory leaks when component unmounts

    const fetchPatientData = async () => {
        const token = localStorage.getItem('acess_token');
            const response = await fetch('/patient/me',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok){
                const data = await response.json();
                setPatientData(data)
            } else{
                console.error('Error fetching patient data:', response.statusText);
            }
        
    }


    return (
        <div>
            <h1>Welcome to the Patient Home Page</h1>
            <div>
                {patientData.map(patient => (
                    <div key={patient.id}>
                        <h2>{patient.first_name}</h2>
                        <p>{patient.email}</p>
                        <p>{patient.contact_number}</p>
                        <p>{patient.role}</p>
                        <p>{patient.date_of_birth}</p>
                        <p>{patient.username}</p>
                    </div>
                ))}
            </div>
        </div>)
}

export default Patient_home_Component;

