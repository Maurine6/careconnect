
// routes.js
import React from 'react';
import Login from './components/LogIn';
import SignUp from './components/SignUp'
import PatientList from './components/PatientList';
import Services from './components/Services';
import AddNewService from './components/NewService';
import AppointmentList from './components/AppointmentList';
import NewAppointment from './components/NewAppointment';

const publicRoutes = [
  { path: '/', element: <SignUp /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/services_offered', element: <Services /> },
  { path: '/services_offered/:id', element: <Services /> },
  
  
];

const privateRoutes = [  
    { path: '/', element: <SignUp /> },
    { path: '/new_services', element: <AddNewService /> },
    { path: '/patients', element: <PatientList /> },
    { path: '/appointments', element: <AppointmentList /> },
    { path: '/new_appointments', element: <NewAppointment />},
];

export { publicRoutes, privateRoutes };
