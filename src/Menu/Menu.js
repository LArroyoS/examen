import { useState } from "react";
import "../menu.css";

function Menu (){
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
    const desplegarOpciones = (index) => {
        setDesplegar({...desplegar, [index]: !desplegar[index]});
    }
    return (
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
    );

}

export default Menu;