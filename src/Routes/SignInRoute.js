import React from "react";
import { useCreateAuthStateContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const SignInRoute = ({ children }) => {
  const userAuth = useCreateAuthStateContext();

  if (userAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default SignInRoute;
