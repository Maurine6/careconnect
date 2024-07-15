import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './components/PublicRoutes/LogIn';
import ServiceForm from './components/PrivateRoutes/ServiceForm';
//import PatientList from './components/PrivateRoutes/PatientList';
import PatientList from './components/PatientList';
//import AppointmentList from './components/PrivateRoutes/AppointmentList';
import AppointmentList from './components/AppointmentList';
import AppointmentForm from './components/PrivateRoutes/AppointmentForm';
import StaffList from './components/PrivateRoutes/StaffList';
import StaffForm from './components/PrivateRoutes/StaffForm';
import Home from './components/PublicRoutes/Home';
import ServiceList from './components/PrivateRoutes/ServiceList';
import Services from './components/Services';
import SignUp from './components/PublicRoutes/SignUp';
import AboutUs from './components/PublicRoutes/AboutUs'; 
import Patient_home_Component from './components/PrivateRoutes/patient_data';
import Access from './components/Acess';
import NewAppointment from './components/NewAppointment';


const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setLoggedIn(false);
        return;
      }

      const response = await fetch('/check_session', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data['user is logged in']) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } else {
        setLoggedIn(false);
      }
    };

    checkSession();
  }, []);;
  const publicRoutes = [
    {path:'/', element:<Home />},
    {path:'/services_offered',element:<Access/>},
    { path: '/appointments/new', element: <AppointmentForm /> },
    { path: '/about-us', element: <AboutUs />},
    { path: '*', element: <div>Page not found</div> },
    { path:'/signup',element: <SignUp />},
  ];

  const renderPublicRoutes = (routes) =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    )); 

    const privateRoutes = [
      { path: '/services/new', element: <ServiceForm /> },
      { path:'/my_data',  element:<NewAppointment />},
      { path: '/services/:id/edit', element: <ServiceForm /> },
      { path: '/appointments', element: <AppointmentList /> },
      { path: '/appointments/new', element: <AppointmentForm /> },
      { path: '/appointments/:id/edit', element: <AppointmentForm /> },
      { path: '/staff/new', element: <StaffForm /> },
      { path: '/staff/:id/edit', element: <StaffForm /> },
      { path: '*', element: <div>Page not found</div> }
    ];
  return (
    <Router>
     <Routes>
        {renderPublicRoutes(publicRoutes)}
  <Route path='/login' element={<LogIn setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}/>
  <Route
    path="/services/new"
    element={
      loggedIn ? <ServiceForm /> : <ServiceForm />
    }
  />
  <Route
    path="/my_data"
    element= {loggedIn ? <NewAppointment/> : <Navigate to="/login"  /> }
  />
  <Route
    path="/services/:id/edit"
    element={
      loggedIn ? <ServiceForm /> : <Navigate to="/"  />
    }
  />
  <Route
    path="/appointments"
    element={loggedIn ? <AppointmentList /> : <Navigate to="/" replace />}
  />
  <Route
    path="/appointments/new"
    element={loggedIn ? <AppointmentForm /> : <Navigate to="/" replace />}
  />
  <Route
    path="/appointments/:id/edit"
    element={loggedIn ? <AppointmentForm /> : <Navigate to="/" replace />}
  />
  <Route
    path="/staff/new"
    element={loggedIn ? <StaffForm /> : <Navigate to="/" replace />}
  />
  <Route
    path="/staff/:id/edit"
    element={loggedIn ? <StaffForm /> : <Navigate to="/" replace />}
  />
  <Route
    path="*"
    element={<div>Page not found</div>}
  />
 </Routes>
</Router>
  );
};

export default AppRoutes;