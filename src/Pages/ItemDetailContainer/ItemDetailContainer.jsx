import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ItemDetail } from "../../Componentes/ItemDetail/ItemDetail";
import PRODUCTOS from "../../Data/Productos.json"

export const ItemDetailContainer = () => {
  const { Itemid } = useParams()
  const [productos, setProductos] = useState([])

  return (
    <div className="show-article">
       <ItemDetail detalles={PRODUCTOS.find(x => x.id === parseInt(Itemid))} />
    </div>
  )
}