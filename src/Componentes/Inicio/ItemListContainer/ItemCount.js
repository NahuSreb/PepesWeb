import { useState, useEffect } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  const NumMin = () => {

    if (count < 1)
      setCount(count + 1)
  }

  useEffect(NumMin, [count])

  return (
    <div >
      <button onClick={() => setCount(count - 1)}>-</button>
      <a>{count}</a>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p></p>
      <button onClick="">Añadir al carrito</button>
    </div>

  );

}

export default ItemCount;

