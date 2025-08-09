import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">TechNova</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="nav-actions">
        <button className="btn-signup">Sign Up</button>
        <button className="btn-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
