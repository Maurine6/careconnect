// src/App.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import ServiceList from './components/Services/ServiceList';
import ServiceForm from './components/Services/ServiceForm';
import PatientList from './components/Patients/PatientList';
import PatientForm from './components/Patients/PatientForm';
import AppointmentList from './components/Appointments/AppointmentList';
import AppointmentForm from './components/Appointments/AppointmentForm';
import StaffList from './components/Staff/StaffList';
import StaffForm from './components/Staff/StaffForm';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import AboutUs from './components/AboutUs'; 

const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <LogIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/services', element: <ServiceList /> },
    { path: '/appointments/new', element: <AppointmentForm /> },
    { path: '/about-us', element: <AboutUs />},
    { path: '*', element: <div>Page not found</div> }
  ];
  
  const privateRoutes = [  
      { path: '/', element: <SignUp /> },
      { path: '/login', element: <LogIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/services/new', element: <ServiceForm /> },
      { path: '/services/:id/edit', element: <ServiceForm /> },
      { path: '/patients/new', element: <PatientForm /> },
      { path: '/patients/:id/edit', element: <PatientForm /> },
      { path: '/appointments', element: <AppointmentList /> },
      { path: '/appointments/new', element: <AppointmentForm /> },
      { path: '/appointments/:id/edit', element: <AppointmentForm /> },
      { path: '/staff/new', element: <StaffForm /> },
      { path: '/staff/:id/edit', element: <StaffForm /> },
      { path: '*', element: <div>Page not found</div> }

  ];
  export { publicRoutes, privateRoutes };

