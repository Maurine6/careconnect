import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


function App() {
  return (
  <div>
    <h1>Project Client</h1>
    <SignUp/>
    <br/><br/><br/><br/><br/><br/><br/>
    <LogIn/>

  </div>
  );
}

export default App;
