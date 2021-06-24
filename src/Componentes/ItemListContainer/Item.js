import imagenes from "../../assets/imagenes"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Item = ({ producto, carrito, productos, setCarrito }) => {
  const [count, setCount] = useState(1);
  const { id, nombre, precio, stock, img, /* descripcion */ } = producto

  const onAdd = id => {
    const producto = productos.filter((producto) => producto.id === id)
    setCarrito([...carrito, ...producto])
  }

  const NumMinMax = () => {
    if (count < 1) setCount(count + 1)
    else if (count > stock) setCount(count - 1)
  }

  useEffect(NumMinMax, [count])

 /*  useEffect(() => {
    const NumMinMax = () => {
      if (count < 1) setCount(count + 1)
      else if (count > stock) setCount(count - 1)
    };
    NumMinMax();
  }, []) */

  
  return (

    <div className="etiqueta">
      <Link to="/MoreInfo"><img src={imagenes.img1} alt='' /></Link>
      <div className="etiqueta__datos">
        <span>{nombre}</span>
        <p></p>
        <span>Precio: $ {precio}</span>
        <p></p>
        <span>Stock:  {stock}</span>

        <div >
          <button onClick={() => setCount(count - 1)}>-</button><p>{count}</p><button onClick={() => setCount(count + 1)}>+</button>
          <p></p>
          <button type="button" onClick={() => onAdd(id)}>Añadir al carrito</button>
        </div>

      </div>
    
    </div>

  );

}

export default Item;