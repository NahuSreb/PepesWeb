import { useState, useEffect } from "react";

export const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);
    const [disRes, setDisRes] = useState(true)
    const [disSum, setDisSum] = useState(false)

    const Sumar = () => {
        setDisRes(false);
        if (count == stock)
        setDisSum(true);
        else (
            setCount(count + 1)
        )
    }


    const Restar = () => {
        setDisSum(false);
        if (count == 1)
        setDisRes(true);
        else (
            setCount(count - 1)
        )
    }


    return (
        <div>
            <button onClick={Restar} disabled={disRes}>-</button><p>{count}</p><button onClick={Sumar} disabled={disSum}>+</button>
        </div>
    )
}