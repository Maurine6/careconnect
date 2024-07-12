import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import AppRoutes from "../routes";
import { BrowserRouter } from "react-router-dom";
import Services from "./Services";
import Patients from "./PatientList";


function App() {
  
  return (
      <AppRoutes />
  );
}

export default App;
