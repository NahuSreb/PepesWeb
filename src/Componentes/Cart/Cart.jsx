import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const Cart = () => {
    const { productos, removeItem, clear } = useContext(CartContext)
    return (
        <div >
            {productos && productos.map((producto) => <div className="cartWidgets__item">
                <img src={producto.item.img} alt='' />
                <div className="etiqueta__datos">
                    <span>{producto.item.nombre}</span>
                    <p></p>
                    <span>Precio: $ {producto.item.precio} x {producto.quantity}</span>
                    <button type="button" onClick={() => removeItem(producto.item.id)}>x</button>
                </div>
            </div>
            )}

            <button onClick={() => clear()}> vaciar carrito</button>
        </div >
    )
}