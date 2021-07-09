import { useState } from "react"
import { useHistory } from "react-router"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const ItemDetail = ({ detalles }) => {
  const { nombre, precio, stock, img/* , cantidad, descripcion  */ } = detalles
  const [count, setCount] = useState(0)
  const history = useHistory()
  const setProducto = useContext(CartContext)

  const onAdd = (quantity) => {
    setCount(quantity)
    setProducto(quantity)
  }

const finishPurchase = () =>{
  history.push("/carrito")
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

            {!count && <ItemCount initial={1} stock={stock} onAdd={onAdd} />}
            {!!count && <button onClick={finishPurchase}>Terminar la compra! </button>}

            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}