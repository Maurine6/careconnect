// AppRoutes.js
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  const token = localStorage.getItem('acess_token');
  if (token){
    setLoggedIn(true);
  }
  }, []);

  const routes = loggedIn ? privateRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRoutes;