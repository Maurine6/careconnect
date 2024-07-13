import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './components/PublicRoutes/LogIn';
import ServiceForm from './components/PrivateRoutes/ServiceForm';
import PatientList from './components/PrivateRoutes/PatientList';
import PatientForm from './components/PrivateRoutes/PatientForm';
import AppointmentList from './components/PrivateRoutes/AppointmentList';
import AppointmentForm from './components/PrivateRoutes/AppointmentForm';
import StaffList from './components/PrivateRoutes/StaffList';
import StaffForm from './components/PrivateRoutes/StaffForm';
import Home from './components/PublicRoutes/Home';
import ServiceList from './components/PrivateRoutes/ServiceList';
import SignUp from './components/PublicRoutes/SignUp';
import AboutUs from './components/PublicRoutes/AboutUs'; 
import Patient_home_Component from './components/PrivateRoutes/patient_data';


const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setLoggedIn(true);
      console.log(token);
    }
  }, [loggedIn]);
  const publicRoutes = [
    {path:'/', element:<Home />},
    {path:'/services_offered',element:<ServiceList/>},
    { path: '/appointments/new', element: <AppointmentForm /> },
    { path: '/about-us', element: <AboutUs />},
    { path: '*', element: <div>Page not found</div> },
    { path:'/signup',element: <SignUp />},
  ];

  const renderPublicRoutes = (routes) =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ));
    const PrivateRoute = ({ element: Component}) => (
      loggedIn ? (
        <Component />
      ) : (
        <Navigate to="/" />
      )
    )
  

    const privateRoutes = [
      { path: '/services/new', element: <ServiceForm /> },
      { path:'/my_data',  element:<Patient_home_Component />},
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
  return (
    <Router>
      <Routes>
        {renderPublicRoutes(publicRoutes)}
        {privateRoutes.map((route,index)=>(
          <Route
           key={index}
           path={route.path}
           element={PrivateRoute(route.element)}
          />
        ))}
        <Route path='/login' element={<LogIn setLoggedIn={setLoggedIn}/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
