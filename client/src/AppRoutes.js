//approutes
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("accessToken");
      setLoggedIn(!!token);
    };
    checkLogin();
  }, []);

  const routes = [
    ...publicRoutes,
    ...privateRoutes.map(route => ({
      ...route,
      element: loggedIn ? route.element : <Navigate to="/login" replace />
    }))
  ];

  const router = createBrowserRouter(routes);

  return loggedIn !== null ? <RouterProvider router={router} /> : null;
};

export default AppRoutes;