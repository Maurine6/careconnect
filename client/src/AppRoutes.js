import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';
import LogIn from './components/Auth/LogIn';
import ServiceForm from './components/Services/ServiceForm';
import PatientList from './components/Patients/PatientList';
import PatientForm from './components/Patients/PatientForm';
import AppointmentList from './components/Appointments/AppointmentList';
import AppointmentForm from './components/Appointments/AppointmentForm';
import StaffList from './components/Staff/StaffList';
import StaffForm from './components/Staff/StaffForm';

const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setLoggedIn(true);
      console.log(token);
    }
  }, []);

  const renderPublicRoutes = (routes) =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ));
    const PrivateRoute = ({ element: Component}) => (
      loggedIn ? (
        <Component setLoggedIn={setLoggedIn} />
      ) : (
        <Navigate to="/login" />
      )
    )
  

    const privateRoutes = [
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
  return (
    <Router>
      <Routes>
        {renderPublicRoutes(publicRoutes)}
        {privateRoutes.map((route,index)=>(
          <Route
           key={index}
           path={route.path}
           element={PrivateRoute(route.element)}
           loggedIn={loggedIn}
           setLoggedIn={setLoggedIn}
          />
        ))}
        <Route path='/login' element={<LogIn setLoggedIn={setLoggedIn}/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
