import { useState } from "react";
import Item from "./Item";

function ItemListContainer() {
  const [producto, setProducto] = useState(`Guiso de lentejas`)
  const [precio, setPrecio] = useState(`15`)
  return (
    <div className="show-article">
      <Item producto={producto} precio={precio} />
      <Item producto={producto} precio={precio} />
      <Item producto={producto} precio={precio} />
      <Item producto={producto} precio={precio} />
    </div>
  );
}
export default ItemListContainer;
