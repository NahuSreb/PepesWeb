import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ({ item }) => {
  const { nombre, precio, stock, img/* , cantidad, descripcion  */ } = item
  
  const [cantidad, setCantidad] = useState(0)

  const { addItem } = useContext(CartContext)

  function onAdd (count) {
    if (count > 0) {
      setCantidad(count)
      addItem(item, count)
    } else{
      console.log(`nada`)
    }
  }


  return (
    <div className="ItemDetailContainer">
      <div className="etiqueta">
        <div className={stock === 0 ? ("sinStock") : ("")} >
          <img src={img} alt='' />
          <div className="etiqueta__datos">
            <span className="etique__nombre">{nombre}</span>
            <p></p>
            <span>Precio: ${precio}</span>
            <p></p>
            <span>Stock: {stock}</span>

            {!cantidad && <ItemCount initial={1} stock={stock} />}
            {!!cantidad && <button onAdd={onAdd}><Link to="/carrito">Terminar la compra!</Link></button>}

            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}