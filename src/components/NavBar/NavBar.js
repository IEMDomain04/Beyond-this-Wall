import React from "react";
import './NavBar.css';

function NavBar() {
    return (
      <nav className="navbar">
        <div className="branding">
            <img src="https://cdn-icons-png.flaticon.com/128/9920/9920949.png" alt="Brand Logo" />
            <span className="title">Beyond the Walls</span>
        </div>
        <div className="nav-links">
            <a href="#about">About</a>
            <a href="#places">Places</a>
        </div>
      </nav>
    );
}

export default NavBar;
