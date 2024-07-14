import React from "react";
function SignUp() {
  return (
    <div className="signup">
      <h1>Welcome to Careconnect.</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
      </div>
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="dob" />
      </div>
      <div className="mb-3">
        <label htmlFor="contactNumber" className="form-label">Contact Number</label>
        <input type="text" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
      </div>
    </div>
  );
}

export default SignUp;
