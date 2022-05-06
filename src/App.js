import React, { useState } from "react";
import './App.css';
import "./menu.css";
import Menu from "./Menu/Menu.js";
import About from "./Vistas/About";
import Organigrama from "./Vistas/Organigrama";
import Calculadora from "./Vistas/Calculadora";
import ListaProductos from "./Vistas/ListaProductos";

function App() {
  const [menu, setMenu] = useState([
    {
      nombre: "About",
      opciones: [
        {nombre: "¿Quienes somos?", pantalla: <About/>},
        {nombre: "Organización", pantalla: <Organigrama/>},
      ]
    },
    {
      nombre: "Operaciones",
      opciones: [
        {nombre: "Calculadora", pantalla: <Calculadora/>},
        {nombre: "Listado de Productos", pantalla: <ListaProductos/>},
      ]
    }
  ]);
  const [vista, setVista ] =  useState(<></>)
  return (
    <div className="App">
      <main>
        <Menu menu={menu} setVista={setVista}/>
      </main>
      <section>
        {vista}
      </section>
    </div>
  );
}

export default App;
