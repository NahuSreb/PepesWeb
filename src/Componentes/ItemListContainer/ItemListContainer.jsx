
import Item from "./Item";

function ItemListContainer({ productos, carrito, setCarrito }) {

  return (

    <div className="show-article">

      {productos.map((producto) => (
        <Item key={productos.id}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
          productos={productos} />
      ))}


    </div>


  );
}
export default ItemListContainer;
