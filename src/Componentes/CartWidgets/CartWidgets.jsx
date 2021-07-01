import React from "react";
import Widgets from "../Widgets/Widgets";
import imagenes from "../../assets/imagenes";
import { useState } from "react";


export const CartWidgets = () => {


  const productos = ([
    {
      id: 1,
      nombre: "Guiso de lenteja",
      precio: 15,
      stock: 10,
      img: imagenes.img1,
      descripcion: "",
      cantidad: 1
    },
    {
      id: 2,
      nombre: "Familiar de milanesa",
      precio: 300,
      stock: 15,
      img: imagenes.img2,
      descripcion: "",
      cantidad: 1
    },
    {
      id: 3,
      nombre: "Familiar especial",
      precio: 400,
      stock: 10,
      img: imagenes.img3,
      descripcion: "",
      cantidad: 1
    },
  ])
  const [catalogo, setCatalogo] = useState([])

  const solicitarItems = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(productos)
      /* reject(<h2>Ocurrio un error</h2>) */
    }, 2000)

  })

  solicitarItems.then((productos) => { setCatalogo(productos) })


  return (

    <ul className="des">

      {catalogo === [] ? <p>Loading...</p> :
        (catalogo.map((producto) => (
          <li><Widgets key={catalogo.id}
            producto={producto} /></li>
        )))}

    </ul>

  );
};


