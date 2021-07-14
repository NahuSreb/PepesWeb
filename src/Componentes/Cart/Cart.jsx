import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
export const Cart = () => {
    const { productos, removeItem, clear } = useContext(CartContext)
    let carro = false;
    if (productos.lenght > 0) {
        carro = true
    }

    return (
        <div >
            {carro && productos.map(producto => <div className="cartWidgets__item">
                <img src={producto.item.img} alt='' />
                <div className="etiqueta__datos">
                    <span>{producto.item.nombre}</span>
                    <p></p>
                    <span>Precio: $ {producto.item.precio} x {producto.quantity}</span>
                    <button type="button" onClick={() => removeItem(id)}>x</button>
                </div>
            </div>
            )}
            <button onClick={() => clear}> vaciar carrito</button>
        </div >
    )
}