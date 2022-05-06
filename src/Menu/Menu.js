import { useState } from "react";
import "../menu.css";

function Menu ({menu,setVista}){
    const [desplegar, setDesplegar] = useState({});
    const desplegarOpciones = (index) => {
        setDesplegar({...desplegar, [index]: !desplegar[index]});
    }
    return (
        <ul class="menuDesplegable">
        { 
          menu.map((item1, index)=> {
            return (
              <li>
                <a onClick={() => desplegarOpciones(item1.nombre)}>{item1.nombre}</a>
                {
                  item1.opciones!=null && desplegar[item1.nombre]==true &&
                  <ul>
                    {
                      item1.opciones.map((item2)=> {
                        return (
                          <li><a onClick={() => setVista(item2.pantalla)}>{item2.nombre}</a></li>
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