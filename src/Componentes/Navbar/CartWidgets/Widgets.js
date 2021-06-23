import imagenes from "../../../assets/imagenes"

function Widgets({producto, precio}) {

  return (
    <div className="des__item">
      <img src={imagenes.img1} alt='' />
      <div className="etiqueta__datos">
        <span>{producto}</span>
        <p></p>
        <span>Precio: $ {precio}</span>
      </div>
    </div>

  );
}

export default Widgets;

