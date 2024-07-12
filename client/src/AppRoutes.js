// AppRoutes.js
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    fetch('/checkSession').then((response) => {
      if (response.ok) {
        response.json().then(() => setLoggedIn(true));
      } else {
        response.json().then(() => setLoggedIn(false));
      }
    });
  }, []);

  const routes = loggedIn ? privateRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
