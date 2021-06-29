
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Item = ({ producto, carrito, productos, setCarrito }) => {
  const [count, setCount] = useState(1);
  const { id, nombre, precio, stock, img, cantidad, /* descripcion */ } = producto

  const NumMinMax = () => {
    if (stock > 0)
      if (count < 1) setCount(count + 1)

      else if (count > stock) setCount(count - 1)
  }

  const onAdd = id => {
    const producto = productos.filter((producto) => producto.id === id)
    setCarrito([...carrito, ...producto])
    console.log("another one")
  }
  const onDel = id => {
    const productos = carrito.filter(producto => producto.id !== id)
    setCarrito(productos)
    console.log("anothern't one :C")
  }

  useEffect(NumMinMax, [count])

  return (

    <div className="etiqueta">
      {productos ? (
        <div>
          {stock > 0 ? (

            <div>
              <Link to="/MoreInfo"><img src={img} alt='' /></Link>
              <div className="etiqueta__datos">
                <span className="etique__nombre">{nombre}</span>
                <p></p>
                <span>Precio: $ {precio}</span>
                <p></p>
                <span>Stock:  {stock}</span>
                <button onClick={() => setCount(count - 1)}>-</button><p>{count}</p><button onClick={() => setCount(count + 1)}>+</button>
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
      ) :
        (
          <div>
            
              <Link to="/MoreInfo"><img src={img} alt='' /></Link>
              <div className="etiqueta__datos">
                <span className="etique__nombre">{nombre}</span> <spna>X {cantidad * count}</spna>
                <p></p>
                <span>Precio: $ {precio}</span>

                <button type="button" onClick={() => onDel(id)}>Quitar</button>
              </div>
            
          </div>
        )}

    </div >

  );
}


export default Item;