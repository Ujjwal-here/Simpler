import React from 'react';
import './Navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="logo">MyApp</div>
    <input type="checkbox" id="toggle" />
    <label htmlFor="toggle" className="hamburger">☰</label>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
);

export default NavBar;