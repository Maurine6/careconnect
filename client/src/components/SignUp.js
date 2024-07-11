import React from "react";
import {useState } from "react";


function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);

      // Reset the form data to its initial state
    setFormData({
        username: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        contactNumber: '',
        email: '',
        password: ''
      });
      // Handle success (e.g., redirecting to another page)
    } catch (error) {
      console.error(error.message);
      // Handle errors
    }
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to Careconnect.</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter your user name" onChange={handleChange} name="username"/>
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={handleChange} name="firstName"/>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={handleChange} name="lastName"/>
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" onChange={handleChange} name="dateOfBirth"/>
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
            <input type="text" className="form-control" id="contactNumber" placeholder="Enter your number" onChange={handleChange} name="contactNumber"/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} name="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleChange} name="password"/>
          </div>
          <button type="submit" className="btn btn-info">Register</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;

