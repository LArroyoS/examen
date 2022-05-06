import React, { useState } from "react";
import './App.css';
import "./menu.css";
import Menu from "./Menu/Menu.js";
import About from "./Vistas/About";
import Organigrama from "./Vistas/Organigrama";

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
  const Calculadora = () => {
    const [values, setValues] = useState({
      value1: "",
      value2: ""
    });
    const [operacion, setOperacion] = useState("+");
    const [respuesta, setRespuesta] = useState("Respuesta");
    const onChangeValue = (id, value) => {
      setValues({...values, [id]: value});
    }
    const onChange = ({target}) => {
      setOperacion(target.value);
    }
    const onClick = () =>{
      var v1 = values.value1;
      var v2 = values.value2;
      if(!isNaN(v1) && !isNaN(v2)){
        v1 = Number(v1);
        v2 = Number(v2);
        switch(operacion){
          case "+": 
            setRespuesta(v1+v2);
            break;
          case "-": 
            setRespuesta(v1-v2);
            break;
          case "*": 
            setRespuesta(v1*v2);
            break;
          case "/": 
            setRespuesta(v1/v2);
            break;
        }
      }
      else{
        setRespuesta("Verifique que el dato ingresado sea un valor numerico")
      }
    }
    
    return (
      <div>
        <p> { JSON.stringify(values) } </p>
        <p> { operacion } </p>
        <input type="number" 
          value={values.value1}
          onChange={({target}) => onChangeValue("value1",target.value)}/>
        <select onChange={onChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" 
          value={values.value2}
          onChange={({target}) => onChangeValue("value2",target.value)}/>
        <button onClick={onClick}>Resolver</button>
        <p> {respuesta} </p>
      </div>
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
        {Calculadora()}
      </section>
    </div>
  );
}

export default App;
