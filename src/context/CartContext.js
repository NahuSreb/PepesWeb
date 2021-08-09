import { createContext, useEffect, useState } from "react";
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [cantidadCar, setCantidadCar] = useState(0)
    const [total, setTotal] = useState(0)

    function addItem(items, cantidad) {
        const isInCart = productos.some(producto => producto.item.id === items.id)
        if (!isInCart) {
            const nuevoItem = {
                item: { ...items },
                quantity: cantidad
            }
            setProductos([...productos, nuevoItem])
        } else {
            productos.forEach(producto => {
                if (producto.item.id === items.id) {
                    return producto.quantity += cantidad
                }
            })
            setProductos([...productos]);
        }
    }

    const clear = () => {
        setProductos([])
        setCantidadCar(0)
    }

    const removeItem = (itemId) => {
        setProductos(productos.filter(producto => producto.item.id !== itemId))
        cantidadItemsCarrito()
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
    useEffect(() => {
        const newTotal = productos
            .map(({ item, quantity }) => item.precio * quantity).reduce(
                (cartTotalPrice, currentItemPrice) => (cartTotalPrice * currentItemPrice), 0
            )
        setTotal(newTotal)
    }, [productos])
    useEffect(() => {
        cantidadItemsCarrito()
    }, [productos])

    return (
        <CartContext.Provider value={{ productos, cantidadCar, addItem, clear, removeItem }}>{children}</CartContext.Provider>
    )
}

