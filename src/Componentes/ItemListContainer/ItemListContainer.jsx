
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
      cantidad: 1,
      categoria: "Comidas"
    },
    {
      id: 2,
      nombre: "Familiar de milanesa",
      precio: 300,
      stock: 15,
      img: imagenes.img2,
      descripcion: "",
      cantidad: 1,
      categoria: "Comidas"
    },
    {
      id: 3,
      nombre: "Familiar especial",
      precio: 400,
      stock: 10,
      img: imagenes.img3,
      descripcion: "",
      cantidad: 1,
      categoria: "Comidas"
    },
    {
      id: 4,
      nombre: "Super pancho",
      precio: 200,
      stock: 25,
      img: imagenes.img4,
      descripcion: "",
      cantidad: 1,
      categoria: "Comidas"
    },
    {
      id: 5,
      nombre: "Papas fritas a caballo",
      precio: 250,
      stock: 10,
      img: imagenes.img5,
      descripcion: "",
      cantidad: 1,
      categoria: "Comidas"
    },
    {
      id: 6,
      nombre: "Papas fritas",
      precio: 200,
      stock: 0,
      img: imagenes.img6,
      descripcion: "",
      cantidad: 1,
      categoria: "Comidas"
    },
    {
      id: 7,
      nombre: "Coca chica",
      precio: 100,
      stock: 8,
      img: imagenes.img7,
      descripcion: "",
      cantidad: 1,
      categoria: "Bebidas"
    },
    {
      id: 8,
      nombre: "Coca grande",
      precio: 200,
      stock: 10,
      img: imagenes.img8,
      descripcion: "",
      cantidad: 1,
      categoria: "Bebidas"
    },
    {
      id: 9,
      nombre: "Agua 500ml",
      precio: 80,
      stock: 0,
      img: imagenes.img9,
      descripcion: "",
      cantidad: 1,
      categoria: "Bebidas"
    },
    {
      id: 10,
      nombre: "Quilmes lata 350ml",
      precio: 150,
      stock: 12,
      img: imagenes.img10,
      descripcion: "",
      cantidad: 1,
      categoria: "Bebidas"
    },
    {
      id: 11,
      nombre: "Sprite 500ml",
      precio: 100,
      stock: 10,
      img: imagenes.img11,
      descripcion: "",
      cantidad: 1,
      categoria: "Bebidas"
    },
    {
      id: 12,
      nombre: "Fanta 500ml",
      precio: 100,
      stock: 6,
      img: imagenes.img12,
      descripcion: "",
      cantidad: 1,
      categoria: "Bebidas"
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
    <div>
      <h1>Nuestros productos</h1>
      <div className="show-article">
        {catalogo ? (<ItemList catalogo={catalogo} />) : (<p>cargando...</p>)}

      </div>
    </div>
  );
}
export default ItemListContainer;
