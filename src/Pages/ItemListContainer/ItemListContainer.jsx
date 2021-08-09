import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ItemList } from "../../Componentes/ItemList/ItemList";
import Spinner from 'react-bootstrap/Spinner'
import firebase from "../../Config/firebase";
import { Fragment } from "react-is";
import { Container } from "react-bootstrap";


export const ItemListContainer = () => {
  const { categoriaID } = useParams()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      const getProductos = async () => {
        try {
          const querrySnapshot = await firebase.db.collection("Productos")
            .get()
          const filterProducts = () => {
            return categoriaID ? (querrySnapshot.docs).filter((producto) => producto.categoria === categoriaID) : querrySnapshot.docs
          }
          setProductos(filterProducts)
          setLoading(false)
        } catch (e) {
          console.log("error", e)
        }
      }
      getProductos()
    },
    [categoriaID]
  )
  console.log("productos", productos)
  /*  useEffect(() => {
     const getItems = () => {
       return categoriaID ? PRODUCTOS.filter((producto) => producto.categoria === categoriaID) : PRODUCTOS
     }
     const productos = getItems
     setProductos(productos)
   }, [categoriaID]) */
  if (loading) {
    return (
      <Spinner animation="border" role="status" />
    )

  } else {
    return (
      <Container>
        <h1>{categoriaID ? `${categoriaID}` : "Nuestros Productos"}</h1>
        <ItemList key={productos.id} productos={productos} />
      </Container>


    )
  }

}

