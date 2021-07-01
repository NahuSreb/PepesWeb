import { useState, useEffect } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);


    const Sumar = () => {
        
        if (count < stock)
           setCount(count + 1) 
           }

    const Restar = () => {
                if (count > 1)
            setCount(count - 1)
           }


    return (
        <div>
            <button onClick={Restar} >-</button><p>{count}</p><button onClick={Sumar} >+</button>
            <button type="button" onClick={onAdd} disabled={stock ==0 ? true : false}>Añadir al carrito</button>
        </div>
    )
}