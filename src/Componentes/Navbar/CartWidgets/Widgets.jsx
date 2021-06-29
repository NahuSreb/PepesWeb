import imagenes from "../../../assets/imagenes"

function Widgets({productos, producto, carrito, setCarrito}) {
  const { id, nombre, precio, stock, img, cantidad, /* descripcion */ } = producto
  return (
    <div className="des__item">
      <img src={img} alt='' />
      <div className="etiqueta__datos">
        <span>{nombre}</span>
        <p></p>
        <span>Precio: $ {precio}</span>
      </div>
    </div>

  );
}

export default Widgets;

