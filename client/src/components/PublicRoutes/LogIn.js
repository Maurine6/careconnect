import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({setLoggedIn, loggedIn}) {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: ""  
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetLoggedIn = (state) => {
    return new Promise((resolve) => {
      setLoggedIn(state);
      resolve();
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        await resetLoggedIn(true);
        console.log(data,response.status,loggedIn);
        Navigate('/my_data')
      }
    }
    catch (error) {
      console.log(loggedIn)
      console.error("Login failed:", error.message);
      // Handle errors
    }
  };
console.log(loggedIn)
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Please Login to Your Account.</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter your username" onChange={handleChange} name="username"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleChange} name="password"/> {/* Changed name to password */}
        </div>
        <button type="submit" className="btn btn-info">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;