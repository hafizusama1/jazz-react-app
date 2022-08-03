import React from "react";
import { useCreateAuthDispatchContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const SignOutRoute = () => {
  const { handleAuthChange } = useCreateAuthDispatchContext();

  handleAuthChange(false);

  return <Navigate to="/" />;
};

export default SignOutRoute;
