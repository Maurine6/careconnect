import React, { useState } from "react";
import Navbar from "../navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    contact_number: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData);
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
          password: ''
        });

        // Handle success (e.g., redirecting to another page)
      } catch (error) {
        console.error(error.message);
        // Handle errors
      }
      alert("Account created successfully.");
      Navigate('/login')
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: '',
      first_name: '',
      last_name: '',
      date_of_birth: '',
      contact_number: '',
      email: '',
      password: ''
    };

    // Basic validation example (you can add more complex validations as needed)
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (formData.first_name.trim() === '') {
      newErrors.first_name = 'First name is required';
      valid = false;
    }

    if (formData.last_name.trim() === '') {
      newErrors.last_name = 'Last name is required';
      valid = false;
    }

    if (formData.date_of_birth.trim() === '') {
      newErrors.date_of_birth = 'Date of Birth is required';
      valid = false;
    }

    if (formData.contact_number.trim() === '') {
      newErrors.contact_number = 'Contact number is required';
      valid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <Navbar/>
      <div className="signup">
      <form className="signupform" onSubmit={handleSubmit}>
        <h1>Welcome to Careconnect.</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" placeholder="Enter your user name" onChange={handleChange} name="username" />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={handleChange} name="first_name" />
          {errors.first_name && <div className="error">{errors.first_name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={handleChange} name="last_name" />
          {errors.last_name && <div className="error">{errors.last_name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" onChange={handleChange} name="date_of_birth" />
          {errors.date_of_birth && <div className="error">{errors.date_of_birth}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="contactNumber" placeholder="Enter your number" onChange={handleChange} name="contact_number" />
          {errors.contact_number && <div className="error">{errors.contact_number}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} name="email" />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" onChange={handleChange} name="password" />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-info" style={{ backgroundColor: "#00008B", color: "#fff" }}>Register</button>
        <p>Already have an account. <Link to="/login">LogIn</Link></p>
      </form>
      </div>
    </div>
  );
}

export default SignUp;
