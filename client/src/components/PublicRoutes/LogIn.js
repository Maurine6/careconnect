import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn({ setLoggedIn, loggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        setLoggedIn(true);
        alert("Login was successful");
        navigate('/about-us');
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Please Login to Your Account.</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
              name="username"
              value={formData.username}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              required
            />
          </div>
          <button type="submit" className="btn btn-info" style={{ backgroundColor: "#00008B", color: "#fff" }}>Log In</button>
          <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
