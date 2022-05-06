import { useState } from "react";
import "../organigrama.css";

function Organigrama(){
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
                                subordinados: [
                                    {
                                        nombre: "Persona11",
                                        puesto: "Officina",
                                        subordinados: null
                                    },
                                ]
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
    const listar = (lista) => {
        return lista.map((item, index) => {
            return (
                <li className="nodo">
                    <div>
                        <hr height="10px"/>
                        <div>
                            <h4> { item.nombre } </h4>
                            <h5> { item.puesto }</h5>
                        </div>
                    </div>
                    { item.subordinados!=null && 
                        (
                            item.subordinados.length>1 && 
                            (
                                <hr width="75%"/> ||
                                listar(item.subordinados)
                            )
                        ) 
                    }
                    <ul class="nivel">
                        { item.subordinados!=null && listar(item.subordinados)}
                    </ul>
                </li>
            );
        });
    }
    return (
        <ul className="nivel">
            {listar(organigrama)}
        </ul>
    );
}

export default Organigrama;