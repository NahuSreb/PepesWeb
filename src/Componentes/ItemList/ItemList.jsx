import Item from "../Item/Item"
import { Fragment } from "react"

export const ItemList = ({ productos }) => {
    return(
    <Fragment>
       {productos && productos.map((producto) => (
        <Item key={productos.id} producto={producto} />            
        ))}
    </Fragment>
)
}
