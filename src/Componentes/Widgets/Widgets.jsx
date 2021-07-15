import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function Widgets({producto}) {
  const { productos, removeItem} = useContext(CartContext)
  return (
    <div className="cartWidgets__item">
      <img src={producto.item.img} alt='' />
      <div className="etiqueta__datos">
        <span>{producto.item.nombre} x {producto.quantity}</span>
        <p></p>
        <span>Precio: $ {producto.item.precio}</span>
        <button type="button" onClick={() => removeItem(producto.item.id)}>x</button>
      </div>
    </div>

  );
}

export default Widgets;

