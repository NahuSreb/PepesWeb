import { useParams } from "react-router";
import { ItemDetail } from "../../Componentes/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import firebase from "../../Config/firebase";
import Spinner from 'react-bootstrap/Spinner'

export const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      const getProductos = async () => {
        try {
          const document = await firebase.db.doc("Productos/" + itemId)
            .get()
          setItem(document.data())
          setLoading(false)
          console.log(item)

        } catch (e) {
          console.log("error", e)
        }
      }
      getProductos()
    },
    []
  )
  if (loading) {
    return (
      <Spinner animation="border" role="status"></Spinner>
    )

  } else {
    return (
      <div className="show-article">
        <ItemDetail item={item} />
      </div>
    )
  }
}