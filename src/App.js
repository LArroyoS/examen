import React, { useState } from "react";
import './App.css';
import "./menu.css";
import logo from "./logo.png";

function App() {
  const [desplegar, setDesplegar] = useState({});
  const [menu, setMenu] = useState([
    {
      nombre: "About",
      opciones: [
        "¿Quienes somos?",
        "Organización",
      ]
    },
    {
      nombre: "Operaciones",
      opciones: [
        "Calculadora",
        "Listado",
      ]
    }
  ]);
  const [organigrama, setOrganigrama] = useState([
    {
      nombre: "Persona1",
      puesto: "Director General",
      subordinados: [
        {
          nombre: "Persona2",
          puesto: "Direccion",
          subordinados: [
            {
              nombre: "Persona5",
              puesto: "Depto.",
              subordinados: [
                {
                  nombre: "Persona8",
                  puesto: "Direccion",
                  subordinados: null
                },
              ]
            },
          ]
        },
        {
          nombre: "Persona3",
          puesto: "Direccion",
          subordinados: [
            {
              nombre: "Persona6",
              puesto: "Depto.",
              subordinados: [
                {
                  nombre: "Persona9",
                  puesto: "Direccion",
                  subordinados: null
                },
                {
                  nombre: "Persona9",
                  puesto: "Direccion",
                  subordinados: null
                },
              ]
            },
            {
              nombre: "Persona7",
              puesto: "Depto",
              subordinados: [
                {
                  nombre: "Persona10",
                  puesto: "Direccion",
                  subordinados: null
                },
              ]
            },
          ]
        },
        {
          nombre: "Persona4",
          puesto: "Direccion",
          subordinados: null
        },
      ]
    }
  ]);
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

  const desplegarOpciones = (index) => {
    setDesplegar({...desplegar, [index]: !desplegar[index]});
  }
  const acercaDe = () => {
    return (
      <div>
        <h1>About</h1>
        <p>Somo una empresa experta innovacion tecnologica.</p>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
  const listar = (lista) => {
    return lista.map((item, index) => {
      return (
        <li>
          <h4> { item.nombre } </h4>
          <h5> { item.puesto }</h5>
          { item.subordinados!=null && listar(item.subordinados)}
        </li>
      );
    });
  }
  const organizacion = () => {
    return (
      <ul>
        {listar(organigrama)}
      </ul>
    );
  }
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
      <p>{ JSON.stringify(menu) }</p>
      <p>{ JSON.stringify(organigrama) }</p>
      <ul class="menuDesplegable">
        { 
          menu.map((item, index)=> {
            return (
              <li>
                <a onClick={() => desplegarOpciones(item.nombre)}>{item.nombre}</a>
                {
                  item.opciones!=null && desplegar[item.nombre]==true &&
                  <ul>
                    {
                      item.opciones.map((item)=> {
                        return (
                          <li>{item}</li>
                        );
                      })
                    }
                  </ul>
                }
              </li>
            );
          }) 
        }
      </ul>
      <section>
        {Calculadora()}
      </section>
    </div>
  );
}

export default App;
