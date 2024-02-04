import React from "react";
import Logo from "../assets/img/PostPulse_logo_24.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
