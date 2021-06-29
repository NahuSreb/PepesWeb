import { useState, useEffect } from "react";

export const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const NumMinMax = () => {
        if (stock > 0)
            if (count < 1) setCount(count + 1)

            else if (count > stock) setCount(count - 1)
    }

    useEffect(NumMinMax, [count])
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button><p>{count}</p><button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}