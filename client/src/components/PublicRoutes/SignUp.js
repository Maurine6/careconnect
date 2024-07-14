//signup
import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    contact_number: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Debugging: Check if name and value are correct
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await fetch('/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Reset the form data to its initial state
      setFormData({
        username: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        contact_number: '',
        email: '',
        password_hash: ''
      });

      // Handle success (e.g., redirecting to another page)
    } catch (error) {
      console.error(error.message);
      // Handle errors
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Careconnect.</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control"  placeholder="Enter your user name" onChange={handleChange} name="username"/>
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={handleChange} name="first_name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={handleChange} name="last_name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" onChange={handleChange} name="date_of_birth"/>
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="contactNumber" placeholder="Enter your number" onChange={handleChange} name="contact_number"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} name="email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" onChange={handleChange} name="password"/>
        </div>
        <button type="submit" className="btn btn-info">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
