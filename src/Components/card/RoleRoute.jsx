import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function RoleRoute({ allowedRoles }) {
  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // If user is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user's role is not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Allow access
  return <Outlet />;
}

export default RoleRoute;