import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Services from "./Services";
import Patients from "./PatientList";


function App() {
  return (
  <div>
    <h1>Project Client</h1>
    <Patients/>
    

  </div>
  );
}

export default App;
