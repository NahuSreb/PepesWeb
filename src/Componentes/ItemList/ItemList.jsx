import Item from "../Item/Item"
import { Fragment } from "react"
import { Container } from "react-bootstrap"

export const ItemList = ({ productos }) => {

    return (
        <Fragment >
            <div className="row">
                {productos.map(producto => <Item key={producto.id} producto={{ ...producto.data(), id: producto.id }} />)}
            </div>
        </Fragment>
    )
}
