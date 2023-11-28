import "./App.css";
import Kep from "./komponens/Kep"
import { adatLista } from "./adatok";
import React, { useState } from "react";


function App() {

  const [kepIndex, setNagyKep] = useState(0);

  function nagyKepCsere(id){
    console.log("nagykép Csere", id)
    setNagyKep(id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>képgaléria</h1>
        <article>
          <div className="fokep">
            <h3>Kép címe</h3>
            <div className="kep">
              <Kep adat={adatLista[kepIndex]} />
            </div>
            <p>leírás, leírás</p>
          </div>
          <div className="galeria">
            {adatLista.map((elem, index) => {
              return <Kep adat={elem} key={index} nagyKepCsere={nagyKepCsere}/>;
            })}
            <Kep adat={adatLista[0]} />
            <Kep adat={adatLista[1]} />
            <Kep adat={adatLista[2]} />
          </div>
        </article>
      </header>
    </div>
  );
}

export default App;
