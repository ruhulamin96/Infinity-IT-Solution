import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <header className="header_design">
        <div>
          <h1>
            <span className="text-primary">Infinity </span> <br />
            IT Institute
          </h1>
        </div>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      
    </div>
  );
}

export default Header;
