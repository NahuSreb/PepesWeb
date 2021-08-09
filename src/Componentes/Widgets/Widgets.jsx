import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";


function Widgets({ producto }) {
  const { removeItem } = useContext(CartContext)
  return (
    <NavDropdown.Item>
      <div className="cartWidgets__item">
        <img src={producto.item.img} alt='' />
        <div className="etiqueta__datos">
          <span>{producto.item.nombre} x {producto.quantity}</span>
          <p></p>
          <span>Precio: $ {producto.item.precio}</span>
          <button type="button" onClick={() => removeItem(producto.item.id)}>x</button>
        </div>
      </div>
    </NavDropdown.Item>
  );
}

export default Widgets;

