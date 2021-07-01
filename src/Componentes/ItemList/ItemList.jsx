import Item from "../Item/Item"

export const ItemList = ({ catalogo }) => {

    return (

        catalogo === [] ? <p>Loading...</p> :
            (catalogo.map((producto) => (
                <Item key={catalogo.id}
                    producto={producto} />
            )))

    )
}
