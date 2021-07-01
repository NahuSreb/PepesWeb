
import { Link } from "react-router-dom";

import { ItemCount } from "../ItemCount/ItemCount";


const Item = ({ producto, catalogo, onAdd }) => {

  const { id, nombre, precio, stock, img, cantidad, /* descripcion */ } = producto
  const initial = 1

  /* const onAdd = id => {
    const producto = catalogo.filter((producto) => producto.id === id)
    
    console.log("another one")
  }
 */


  return (
    <div className="etiqueta">
      <div className={stock === 0 ? ("sinStock") : ("")} >
        <Link to="/MoreInfo"><img src={img} alt='' /></Link>
        <div className="etiqueta__datos">
          <span className="etique__nombre">{nombre}</span>
          <p></p>
          <span>Precio: $ {precio}</span>
          <p></p>
          <span>Stock:  {stock}</span>
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
          <p></p>
        </div>
      </div>
    </div>
  );
}


export default Item;