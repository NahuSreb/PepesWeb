import React, { Fragment } from "react";
import Widgets from "../Widgets/Widgets";
import { useState, useEffect } from "react";
import PRODUCTOS from "../../Data/Productos.json"

export const CartWidgets = () => {

  const [productos, setProductos] = useState([])
  
    useEffect(() => {
      const getItems = () => {
        return PRODUCTOS
      }
      const productos = getItems
      setProductos(productos)
    }, [])

    return (
      <Fragment>
        {productos && productos.map((producto) => (
          <li><Widgets key={productos.id} producto={producto} /></li>
        ))}
      </Fragment>
    );
  
}

