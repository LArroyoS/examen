import React, { useState } from "react";
import './App.css';
import "./menu.css";
import Menu from "./Menu/Menu.js";
import About from "./Vistas/About";
import Organigrama from "./Vistas/Organigrama";
import Calculadora from "./Vistas/Calculadora";
import ListaProductos from "./Vistas/ListaProductos";

function App() {

  return (
    <div className="App">
      <main>
        <Menu/>
      </main>
      <section>
        <About/>
        <Organigrama/>
        <Calculadora/>
        <ListaProductos/>
      </section>
    </div>
  );
}

export default App;
