
import {useState } from "react";
import Item from "./Item";
import Carrito from "./Carrito"


function ItemListContainer() {


  const [productos, /* setProductos */] = useState([
    {
      id: 1,
      nombre: "Guiso de lenteja",
      precio: 15,
      stock: 10,
      img: "./img/data.json",
      descripcion: ""
    },
    {
      id: 2,
      nombre: "Familiar de milanesa",
      precio: 300,
      stock: 15,
      img: "",
      descripcion: ""
    },
    {
      id: 3,
      nombre: "Familiar de milanesa especial",
      precio: 400,
      stock: 10,
      img: "",
      descripcion: ""
    },
    {
      id: 4,
      nombre: "Super pancho",
      precio: 200,
      stock: 25,
      img: "",
      descripcion: ""
    },
    {
      id: 5,
      nombre: "Papas fritas caballo",
      precio: 250,
      stock: 10,
      img: "",
      descripcion: ""
    }
  ])

  const [carrito, setCarrito] = useState([])
  return (
    <div className="show-article">

      {productos.map((producto) => (
        <Item key={productos.id}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
          productos={productos} />
      ))}

<Carrito carrito = {carrito} setCarrito = {setCarrito}/>
    </div>
  );
}
export default ItemListContainer;