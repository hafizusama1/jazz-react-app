import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/cart">
          <li>Cart</li>
        </Link>

        <Link to="/signin">
          <li>Sign In</li>
        </Link>

        <Link to="/signout">
          <li>Sign Out</li>
        </Link>
      </ul>
    </div>
  );
}
