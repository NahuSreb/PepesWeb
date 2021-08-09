import React, { Fragment } from "react";
import Widgets from "../Widgets/Widgets";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";


export const CartWidgets = () => {
  const { productos } = useContext(CartContext)


  return (
    <NavDropdown title="Carrito" id="basic-nav-dropdown">
      {productos && productos.map((producto) => (
        <li><Widgets key={productos.id} producto={producto} /></li>
      ))}
    </NavDropdown>

  );

}

