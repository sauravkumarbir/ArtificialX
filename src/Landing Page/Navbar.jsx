import React from 'react';
import './Home.css'; // You can create a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">ArtificialX</a>
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-link">Home</a>
        <a href="/payments" className="nav-link">Payments</a>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/contact" className="nav-link">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
