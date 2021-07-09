function Widgets({producto}) {
 
  const { nombre, precio, img/* , stock, cantidad, id, descripcion */} = producto


  return (
    <div className="cartWidgets__item">
      <img src={img} alt='' />
      <div className="etiqueta__datos">
        <span>{nombre}</span>
        <p></p>
        <span>Precio: $ {precio}</span>
        <button type="button" /* onClick={() => onDel(id)} */>x</button>
      </div>
    </div>

  );
}

export default Widgets;

