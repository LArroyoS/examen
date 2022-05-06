import { useState } from "react";

function ListaProductos(){
    const [listaProductos, setListaProductos] = useState([
        {
            nombre: "Producto1",
            descripcion: "Descripcion",
            precio: "0.00",
            imagen: "../logo.png"
        },
        {
            nombre: "Producto2",
            descripcion: "Descripcion",
            precio: "0.00",
            imagen: "../logo.png"
        },
        {
            nombre: "Producto2",
            descripcion: "Descripcion",
            precio: "0.00",
            imagen: "../logo.png"
        }
    ]);
    return (
        <table>
            {
                listaProductos.map((item) => {
                    return (
                    <tr>
                        <td>
                            <img src={require(item.imagen)} alt={item.nombre}/>
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

export default ListaProductos;