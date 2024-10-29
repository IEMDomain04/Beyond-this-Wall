import React from "react";
import './Places.css';

function Places() {
    return (
      <div className="places">

        {/* Contents */} 
        <main className="places-main">
          <section className="places-section">

            <div className="places-images"> 
              <img className="place-img" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Catedral_de_la_Inmaculada_Concepci%C3%B3n%2C_Manila%2C_Filipinas%2C_2023-08-26%2C_DD_21.jpg" alt="Places" />
              <img className="place-img" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Catedral_de_la_Inmaculada_Concepci%C3%B3n%2C_Manila%2C_Filipinas%2C_2023-08-26%2C_DD_21.jpg" alt="Places" />
            </div>

            <div className="places-texts">
              <h1 className="place-title"> Title </h1>
              <p className="place-description"> Description</p>
            </div>
            
          </section>
        </main>
      </div>
    );
}



export default Places;  // Default export
