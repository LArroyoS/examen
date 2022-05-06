import React, { useState } from "react";
import './App.css';
import "./menu.css";
import Menu from "./Menu/Menu.js";
import About from "./Vistas/About";
import Organigrama from "./Vistas/Organigrama";
import Calculadora from "./Vistas/Calculadora";

function App() {
  const [listaProductos, setListaProductos] = useState([
    {
      nombre: "Producto1",
      descripcion: "Descripcion",
      precio: "0.00",
      imagen: "./logo.png"
    },
    {
      nombre: "Producto2",
      descripcion: "Descripcion",
      precio: "0.00",
      imagen: "./logo.png"
    },
    {
      nombre: "Producto2",
      descripcion: "Descripcion",
      precio: "0.00",
      imagen: "./logo.png"
    }
  ]);
  const ListaProd = () => {
    return (
      <table>
        {
          listaProductos.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.imagen} alt={item.nombre}/>
                </td>
                <td>
                  <h4>{item.nombre}</h4>
                  <h5>{item.descripcion}</h5>
                  <h3><b>$ {item.precio}</b></h3>
                </td>
              </tr>
            );
          })
        }
      </table>
    );
  }

  return (
    <div className="App">
      <main>
        <Menu/>
      </main>
      <section>
        <About/>
        <Organigrama/>
        <Calculadora/>
      </section>
    </div>
  );
}

export default App;
