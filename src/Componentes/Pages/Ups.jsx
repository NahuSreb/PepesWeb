import { Link } from "react-router-dom"

export const Ups = () => {
    return(
        <div>
            <p><h1>Ups</h1></p>
            <p>No pudimos encontrar tu pagina</p>
            <p><Link to="/">Volver al Inicio</Link></p>
        </div>
    )
}