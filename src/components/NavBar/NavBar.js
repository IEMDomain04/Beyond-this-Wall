import React from "react";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <nav>
        <div class="logo">
          <img src="https://cdn-icons-png.flaticon.com/128/698/698633.png" alt="Logo" />
        </div>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="menu-icon">&#9776;</label>
          <ul class="menu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Places</a></li>
          </ul>
      </nav>
      </nav >
    );
}

export default NavBar;
