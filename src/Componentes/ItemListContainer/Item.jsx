
import { Link } from "react-router-dom";

import { ItemCount } from "./ItemCount";


const Item = ({ producto, carrito, productos, setCarrito }) => {
  
  const { id, nombre, precio, stock, img, cantidad, /* descripcion */ } = producto
 

  const onAdd = id => {
    const producto = productos.filter((producto) => producto.id === id)
    setCarrito([...carrito, ...producto])
    console.log("another one")
  }
 
  

  return (

    <div className="etiqueta">
      {stock > 0 ? (
        <div>
          <Link to="/MoreInfo"><img src={img} alt='' /></Link>
          <div className="etiqueta__datos">
            <span className="etique__nombre">{nombre}</span>
            <p></p>
            <span>Precio: $ {precio}</span>
            <p></p>
            <span>Stock:  {stock}</span>
            <ItemCount stock={stock}/>
            <p></p>
            <button type="button" onClick={() => onAdd(id)}>Añadir al carrito</button>
          </div>
        </div>
      ) : (
        <div className="sinStock">
          <h1>Sin Stock</h1>
          <img src={img} alt='' />
          <div className="etiqueta__datos">
            <span className="etique__nombre">{nombre}</span>
            <p></p>
            <span>Precio: $ {precio}</span>
            <p></p>
            <span>Stock:  {stock}</span>
            <button>-</button><p>0</p><button>+</button>
            <p></p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Item;