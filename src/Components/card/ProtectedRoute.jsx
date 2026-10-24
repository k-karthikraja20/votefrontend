import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check login status from localStorage
  const isLoggedIn = localStorage.getItem("token");

  // If not logged in, redirect to Login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render protected pages
  return <Outlet />;
};

export default ProtectedRoute;


