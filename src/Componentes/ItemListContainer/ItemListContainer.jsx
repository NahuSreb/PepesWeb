
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import imagenes from "../../assets/imagenes"

export const ItemListContainer = () => {

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
    {
      id: 4,
      nombre: "Super pancho",
      precio: 200,
      stock: 25,
      img: imagenes.img4,
      descripcion: "",
      cantidad: 1
    },
    {
      id: 5,
      nombre: "Papas fritas a caballo",
      precio: 250,
      stock: 10,
      img: imagenes.img5,
      descripcion: "",
      cantidad: 1
    },
    {
      id: 6,
      nombre: "Papas fritas",
      precio: 200,
      stock: 0,
      img: imagenes.img6,
      descripcion: "",
      cantidad: 1
    }
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
    <div className="show-article">
{catalogo ? (<ItemList catalogo={catalogo} />):(<p>cargando...</p>)}
      
    </div>
  );
}
export default ItemListContainer;
