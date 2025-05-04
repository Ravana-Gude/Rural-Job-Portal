import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Or Header.css

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img
        src="https://img.freepik.com/premium-vector/job-finder-logo-design-template_145155-2660.jpg"
        alt="Logo"
        className="logo"
      />
      <h1>JOB FINDER</h1>
    </div>
    <nav className="nav">
      <Link to="/">Daily Wage Jobs</Link>
      <Link to="/agriculture">Agricultural Work</Link>
      <Link to="/handicrafts">Handicraft Industries</Link>
      
    </nav>
  </header>
);

export default Header;
