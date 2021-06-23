import Widgets from "./Widgets";
import { useState } from "react";

function CartWidgets() {
  const [producto, setProducto] = useState(`Guiso de lentejas`)
  const [precio, setPrecio] = useState(`15`)

  
  return (
    <ul className="des">
      <li><Widgets producto={producto} precio={precio} /></li>
      
    </ul>
  );
}

export default CartWidgets;