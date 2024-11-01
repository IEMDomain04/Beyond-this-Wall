import React from "react";
import './NavBar.css';

function NavBar() {
    return (
      <nav className="navbar">
        <div className="branding" data-aos="fade-right" data-aos-duration="3000">
            <img src="https://cdn-icons-png.flaticon.com/128/9920/9920949.png" alt="Brand Logo" />
            <span className="title">Beyond the Walls</span>
        </div>
        <div className="nav-links" data-aos="fade-right" data-aos-duration="3000">
            <a href="#about">About</a>
            <a href="#places">Places</a>
        </div>
      </nav>
    );
}

export default NavBar;
