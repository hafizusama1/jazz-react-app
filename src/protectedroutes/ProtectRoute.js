import React from "react";
import { useCreateAuthStateContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const userAuth = useCreateAuthStateContext();

  if (!userAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoutes;
