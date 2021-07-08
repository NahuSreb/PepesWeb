import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({detalles}) => {
  console.log(detalles)
  const { nombre, precio, stock, img/* , cantidad, descripcion  */ } = detalles
  const initial = 1

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
            <ItemCount initial={initial} stock={stock} />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}