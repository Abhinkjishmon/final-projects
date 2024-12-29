import { getLocalStorageItem } from "@/utils/localStorage";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = getLocalStorageItem("user");
  // Check if the user data or token exists in local storage
  return user && user.email ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
