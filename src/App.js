import React from "react";
import Card from "./components/Card";
import "./Style/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Cart from "./components/Cart";
import Signin from "./components/SignIn";
import ProtectedRoutes from "./protectedroutes/ProtectRoute";
import SignInRoute from "./Routes/SignInRoute";
import SignOutRoute from "./Routes/SignOutRoute";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signin"
          element={
            <SignInRoute>
              <Signin />
            </SignInRoute>
          }
        />
        <Route path="/signout" element={<SignOutRoute />} />
      </Routes>
    </div>
  );
}
