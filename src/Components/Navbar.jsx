import React from "react";
import "../assets/css/Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="logo">X</div>
        <div class="links">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </div>
  );
};
