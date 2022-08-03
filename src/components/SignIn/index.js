import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../../context/UserContext";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { handleAuthChange } = useCreateAuthDispatchContext();

  const handleOnChange = () => {
    if (userName !== "usama" && password !== "admin123") {
      return;
    }
    handleAuthChange(true);
    navigate("/cart");
  };

  return (
    <div>
      <h3>Please enter your username</h3>
      <input
        type="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <h3>Please enter your password</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleOnChange}>Login</button>
    </div>
  );
}
