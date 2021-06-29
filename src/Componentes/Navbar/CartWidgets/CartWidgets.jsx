import React from "react";
import Item from "../../ItemListContainer/Item";
import Widgets from "./Widgets";


const CartWidgets = ({carrito, setCarrito}) =>{
    return(
<div>

{carrito.length === 0 ? (<p></p>) : (<div><h3>Carrito</h3>  {carrito.map((producto => <Widgets key={producto.id} producto={producto} carrito={carrito} setCarrito={setCarrito}/>))}</div>) }
</div>
    );
};
export default CartWidgets