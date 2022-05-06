import { useState } from "react";
import "../menu.css";

function Menu ({menu}){
    const [desplegar, setDesplegar] = useState({});
    const desplegarOpciones = (index) => {
        setDesplegar({...desplegar, [index]: !desplegar[index]});
    }
    return (
        <ul class="menuDesplegable">
        { 
          menu.map((item, index)=> {
            return (
              <li>
                <a onClick={() => desplegarOpciones(item1.nombre)}>{item.nombre}</a>
                {
                  item.opciones!=null && desplegar[item1.nombre]==true &&
                  <ul>
                    {
                      item.opciones.map((item2)=> {
                        return (
                          <a onClick={() => setVista(item2.pantalla)}>{item2.nombre}</li>
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