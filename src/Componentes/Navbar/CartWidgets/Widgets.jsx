function Widgets({productos, producto, carrito, setCarrito}) {
  const { id, nombre, precio, stock, img, cantidad, /* descripcion */ } = producto

  const onDel = id => {
    const productos = carrito.filter(producto => producto.id !== id)
    setCarrito(productos)
    console.log("anothern't one :C")
  }

  return (
    <div className="des__item">
      <img src={img} alt='' />
      <div className="etiqueta__datos">
        <span>{nombre}</span>
        <p></p>
        <span>Precio: $ {precio}</span>
        <button type="button" onClick={() => onDel(id)}>x</button>
      </div>
    </div>

  );
}

export default Widgets;

