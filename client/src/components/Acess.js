import React, { useState } from "react";
import Services from "./Services";
import PatientList from "./PatientList";
import AddNewService from "./NewService";
import AppointmentList from "./AppointmentList";
import Navbar from "./navbar";
import "./Acess.css";

function Access() {
  // State to manage which component to display
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to handle component selection
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  // Render content based on selectedComponent state
  const renderContent = () => {
    switch (selectedComponent) {
      case "AddNewService":
        return <AddNewService />;
      case "Services":
        return <Services />;
      case "PatientList":
        return <PatientList />;
      case "AppointmentList":
        return <AppointmentList />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <p style={{ fontWeight: "bold", color: "red" }}>For Admins only. Manage All Our Services Here</p>
      <div className="access">
      <div className="sidebar">
        <button onClick={() => handleComponentClick("AddNewService")}>
          Add New Service
        </button>
        <button onClick={() => handleComponentClick("Services")}>
          Services
        </button>
        <button onClick={() => handleComponentClick("PatientList")}>
          Patient List
        </button>
        <button onClick={() => handleComponentClick("AppointmentList")}>
          Appointment List
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      </div>
    </div>
  );
}

export default Access;
