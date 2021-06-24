import Widgets from "./Widgets";
import { useState } from "react";
/* import Carrito from "../../ItemListContainer/Carrito"; */

function CartWidgets() {
  const [producto, /* setProducto */] = useState(`Guiso de lentejas`)
  const [precio, /* setPrecio */] = useState(`15`)

  
  return (
    <ul className="des">
      
      <li><Widgets producto={producto} precio={precio} /></li>
      
    </ul>
  );
}

export default CartWidgets;

{/* <div><Carrito carrito = {carrito} setCarrito = {setCarrito}/></div> */}