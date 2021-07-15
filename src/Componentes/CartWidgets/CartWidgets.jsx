import React, { Fragment } from "react";
import Widgets from "../Widgets/Widgets";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartWidgets = () => {
   const { productos, removeItem} = useContext(CartContext)

   
    return (
      <Fragment>
        {productos && productos.map((producto) => (
          <li><Widgets key={productos.id} producto={producto}  /></li>
        ))}
      </Fragment>
    );
  
}

