import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ItemList } from "../../Componentes/ItemList/ItemList";
import PRODUCTOS from "../../Data/Productos.json"

export const ItemListContainer = () => {
  const { categoriaID } = useParams()
  const [productos, setProductos] = useState([])


  useEffect(() => {
    const getItems = () => {
      return categoriaID ? PRODUCTOS.filter((producto) => producto.categoria === categoriaID) : PRODUCTOS
    }
    const productos = getItems
    setProductos(productos)
  }, [categoriaID])

  return (
    <div>
      <h1>{categoriaID ? `${categoriaID}` : "Nuestros Productos"}</h1>
      <div className="show-article">
        <ItemList productos={productos} />
      </div>
    </div>
  );
}

