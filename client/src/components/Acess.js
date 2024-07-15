import React from "react";
import Services from "./Services";
import PatientList from "./PatientList";
import AddNewService from "./NewService";
import AppointmentList from "./AppointmentList";

function Access(){
    return(
        <div className="access">        
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