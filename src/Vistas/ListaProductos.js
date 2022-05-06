import { useState } from "react";
import "../listaproductos.css";

function ListaProductos(){
    const max = 50;
    const min = 10;
    const [listaProductos, setListaProductos] = useState([
        {
            nombre: "producto1",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto1.PNG")
        },
        {
            nombre: "producto2",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto2.PNG")
        },
        {
            nombre: "producto3",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto3.PNG")
        },
        {
            nombre: "producto4",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto4.PNG")
        },
        {
            nombre: "producto5",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto5.PNG")
        },
        {
            nombre: "producto6",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto6.PNG")
        },
        {
            nombre: "producto7",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto7.PNG")
        },{
            nombre: "producto8",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto8.PNG")
        },
        {
            nombre: "producto9",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto9.PNG")
        },
        {
            nombre: "producto10",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto10.PNG")
        },
        {
            nombre: "producto11",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto11.PNG")
        },
        {
            nombre: "producto12",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto12.PNG")
        },
        {
            nombre: "producto13",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto13.PNG")
        },
        {
            nombre: "producto14",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto14.PNG")
        },
        {
            nombre: "producto15",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto15.PNG")
        },{
            nombre: "producto16",
            descripcion: "Descripcion",
            precio: ""+Math.floor((Math.random() * (max - min + 1))),
            imagen: require("../Productos/producto16.PNG")
        }
    ]);
    return (
        <table className="lista">
            {
                listaProductos.map((item) => {
                    return (
                    <tr>
                        <td>
                            <img src={item.imagen} alt={item.nombre}/>
                        </td>
                        <td className="datos">
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

export default ListaProductos;