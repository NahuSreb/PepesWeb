import ItemListContainer from "../ItemListContainer/ItemListContainer"
import imagenes from "../../assets/imagenes"
import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import CartWidgets from "../Navbar/CartWidgets/CartWidgets";

function Inicio() {
  const [productos, /* setProductos */] = useState([
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
      nombre: "Familiar de milanesa especial",
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



  const [carrito, setCarrito] = useState([])
  return (
    <div>
      <NavBar carrito={carrito} setCarrito={setCarrito} />
      <CartWidgets carrito={carrito} setCarrito={setCarrito} />
      
      <h1>Nuestros productos</h1>
      <ItemListContainer productos={productos} carrito={carrito} setCarrito={setCarrito} />
    </div>
  );

}

export default Inicio;