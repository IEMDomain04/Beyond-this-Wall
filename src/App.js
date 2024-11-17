import React from "react";
import NavBar from "./components/navBar/NavBar";
import Cards from "./components/places/Places";
import Header from "./components/header/Header";

function App() {
    return (
        <div>
            <NavBar />
            <Header />
            <Cards />
        </div>
    );
}

export default App;
