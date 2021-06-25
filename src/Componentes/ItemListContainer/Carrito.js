import React from "react";
import Item from "./Item";


const Carrito = ({carrito, setCarrito}) =>{
    return(
<div>
<h3>Carrito</h3>
{carrito.length === 0 ? (<p>0</p>) : (carrito.map((producto => <Item key={producto.id} producto={producto} carrito={carrito} setCarrito={setCarrito}/>))) }
</div>
    );
};
export default Carrito