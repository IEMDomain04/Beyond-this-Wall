import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">

      <div id="header-texts">
        <h1 id="title">Welcome to Beyond the Walls!</h1>
        <p id="subtitle">
          This is a website built for just Intramuros attractions and places you want to see!
        </p>
        <a href="#places"> 
          <button id="action-btn">See Places!</button>
        </a>
      </div>

      <img id="intra-img" src="../../../assets/header-img.svg" alt="Illustration of Intramuros attractions" />

    </header>
  );
}

export default Header;
