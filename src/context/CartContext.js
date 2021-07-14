import { createContext, useEffect, useState } from "react";
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [cantidadCar, setCantidadCar] = useState(0)

    const addItem = (items, cantidad) => {
        const isInCart = productos.some(producto => producto.item.id === items[0].id)
        if (!isInCart) {
            const nuevoItem = {
                item: { ...items[0] },
                quantity: cantidad
            }
            setProductos([...productos, nuevoItem])
        } else {
            productos.forEach(producto => {
                if (producto.item.id === items[0].id) {
                    return producto.quantity += cantidad
                }
            })
            setProductos([...productos]);
        }
    }

    const cantidadItemsCarrito = () => {
        let total = 0
        if (productos.length > 0) {
            productos.forEach((producto) => {
                total = + producto.quantity
            })
            setCantidadCar(total)
        }
    }
    const clear = () => {
        setProductos([])
        setCantidadCar(0)
    }
    useEffect(()=>{
        cantidadItemsCarrito()
    },[productos])

    const removeItem = (itemId) => {
        setProductos(productos.filter(producto => producto.item.id !== itemId))
    }


    return (
        <CartContext.Provider value={productos, cantidadCar,addItem, clear, removeItem}>{children}</CartContext.Provider>
    )
}

