import React from "react";
import "../assets/css/Navbar.css";
import { Link, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="logo">X</div>
        <div class="links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};
