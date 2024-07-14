// src/App.js

import React from 'react';
import Home from './components/Home';
import ServiceList from './components/Services/ServiceList';
import SignUp from './components/Auth/SignUp';
import AboutUs from './components/AboutUs'; 
import AppointmentForm from './components/Appointments/AppointmentForm';
import LogIn from './components/Auth/LogIn';


const publicRoutes = [
    {path:'/', element:<Home />},
    {path:'/services_offered',element:<ServiceList/>},
    { path: '/login', element: <LogIn /> },
    { path: '/appointments/new', element: <AppointmentForm /> },
    { path: '/about-us', element: <AboutUs />},
    { path: '*', element: <div>Page not found</div> },
    { path:'/signup',element: <SignUp />},
  ];
  export { publicRoutes };

