import React from "react";
function LogIn() {
  return (
    <div className="login">
      <h1>Please Login to Your Account.</h1>
      <div className="mb-3">
        <label htmlFor="loginUsername" className="form-label">Username</label>
        <input type="text" className="form-control" id="loginUsername" placeholder="Enter your username" />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" />
      </div>
    </div>
  );
}

export default LogIn;
