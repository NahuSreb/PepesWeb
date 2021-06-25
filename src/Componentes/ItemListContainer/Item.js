import imagenes from "../../assets/imagenes"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Item = ({ producto, carrito, productos, setCarrito }) => {
  const [count, setCount] = useState(1);
  const { id, nombre, precio, stock, img, cantidad, /* descripcion */ } = producto

  const NumMinMax = () => {
    if (count < 1) setCount(count + 1)
    else if (count > stock) setCount(count - 1)
  }

  const onAdd = id => {
    const producto = productos.filter((producto) => producto.id === id)
    setCarrito([...carrito, ...producto])
    console.log("another one")
  }
  const onDel = id =>{
    const productos = carrito.filter (producto => producto.id !== id)
    setCarrito(productos)
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

        <div >
          {productos ? (
            <div>
              <span className="etique__nombre">{nombre}</span>
              <p></p>
              <span>Precio: $ {precio}</span>
              <p></p>
              <span>Stock:  {stock}</span>
              <button onClick={() => setCount(count - 1)}>-</button><p>{count}</p><button onClick={() => setCount(count + 1)}>+</button>
              <p></p>
              <button type="button" onClick={() => onAdd(id)}>Añadir al carrito</button>
            </div>
          ) :
            (
              <div>
                <span className="etique__nombre">{nombre}</span> <a>X {cantidad * count}</a>
                <p></p>
                <span>Precio: $ {precio}</span>
                
                <button type="button" onClick={() => onDel(id)}>Quitar</button>
              </div>
            )}
        </div>
      </div>
    </div>
  );

}

export default Item;