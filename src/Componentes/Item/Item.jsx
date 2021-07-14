import { NavLink } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";


const Item = ({ producto}) => {
  const { id, nombre, precio, stock, img/* , cantidad, descripcion */ } = producto
  const initial = 1

  return (
    <div className="etiqueta">
      <div className={stock === 0 ? ("sinStock") : ("")} >
        <NavLink to={`/Item/${id}`}><img src={img} alt='' /></NavLink>
        <div className="etiqueta__datos">
          <span className="etique__nombre">{nombre}</span>
          <p></p>
          <span>Precio: $ {precio}</span>
          <p></p>
          <span>Stock:  {stock}</span>
          
          <p></p>
        </div>
      </div>
    </div>
  );
}


export default Item;