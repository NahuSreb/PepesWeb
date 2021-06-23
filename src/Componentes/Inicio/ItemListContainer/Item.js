import imagenes from "../../../assets/imagenes"
import ItemCount from "./ItemCount";

function Item({ producto, precio }) {
  return (
    <div className="etiqueta">
      <img src={imagenes.img1} alt='' />
      <div className="etiqueta__datos">
        <span>{producto}</span>
        <p></p>
        <span>Precio: $ {precio}</span>
        <ItemCount />
        
      </div>
    </div>

  );

}

export default Item;

