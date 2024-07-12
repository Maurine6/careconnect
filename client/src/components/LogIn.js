import React, { useState } from "react";

function LogIn() {
  const [formData, setFormData] = useState({
    username: "",
    password_hash: ""
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      const data = await response.json();
      // Reset the form data to its initial state
      setFormData({
        username: "",
        password_hash: ""
      });
      // Handle success (e.g., storing tokens, redirecting)
    } catch (error) {
      console.error(error.message);
      // Handle errors
    }
  };

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
          <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleChange} name="password_hash"/>
        </div>
        <button type="submit" className="btn btn-info">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;