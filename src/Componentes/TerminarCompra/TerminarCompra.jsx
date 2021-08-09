import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import {Input} from "../Input/Input"

export const TerminarCompra = () => {
    const { productos, removeItem } = useContext(CartContext)
    const [inputs] = useState([
        {
            id: "name",
            des: "Nombre"
        },
        {
            id: "lastname",
            des: "Apellido"
        },
        {
            id:"age",
            des:"Edad"
        }
    ])
    return (
        <div>
            <div>
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
            </div>
            <div className="reg">
                <form className="reg_form">
                    {inputs.map((input) => (
                        <Input key={inputs.des}
                            input={input}
                        />
                    ))}
                </form>

            </div>

        </div>
    )
}