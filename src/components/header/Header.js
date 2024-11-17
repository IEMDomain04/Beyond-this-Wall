import React from "react";
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <div id="header-texts">
        <h1 id="title"> Welcome to Beyond the Walls!</h1>
        <p id="subtitle"> This is a website built for just intramuros attractions and places you want to see!</p>
        <a href=""> <button id="action-btn"> See Places! </button> </a>
      </div>
    </nav >
    );
}

export default Header;
