import React from 'react';
import PatientNavbar from './PatientNavbar';
import MyVideoComponent from '../CSS/Video/MyVideocomponent'
function HomePage() {
  return (
    <div className='container-fluid mt-3'>
      <div className='row'>
      <PatientNavbar/>
      {/* content goes here */}
      <div className='col '>
        <h1>Welcome to your Patient Portal</h1>
        <p>This is where you can view your appointments, upcoming appointments, and any other relevant information.</p>
        <MyVideoComponent />

      </div>
      </div>
    </div>
    );
}

export default HomePage;
