import React from "react";
import Services from "./Services";
import PatientList from "./PatientList";
import AddNewService from "./NewService";
import AppointmentList from "./AppointmentList";
import Navbar from "./navbar";
function Access(){
    return(
        <div className="access">
            <Navbar/>        
            <AddNewService/>
            <br/><br/>
            <Services/>
            <br/><br/>
            <PatientList/>
            <br/><br/>
            <AppointmentList/>
            <br/><br/>
        </div>
    )
}
export default Access;