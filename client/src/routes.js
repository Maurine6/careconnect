// routes.js
import React from 'react';
import Login from './components/LogIn';
import SignUp from './components/SignUp'// Ensure this component exists

const publicRoutes = [
  { path: '/', element: <SignUp /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> }
];

const privateRoutes = [  
    { path: '/', element: <SignUp /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> }
];

export { publicRoutes, privateRoutes };
