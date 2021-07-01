
export const ItemDetail = ({ ship }) => {
    const {name, model, manufacturer, cost_in_credits, length, crew} = ship
    return (
        <div className="ItemDetailContainer">
            <ul>
                <li>
                    <b>Nombre:</b>
                    <span>{name}</span>
                </li>
                <li>
                    <b>Modelo:</b>
                    <span>{model}</span>
                </li>
                <li>
                    <b>Creada por:</b>
                    <span>{manufacturer}</span>
                </li>
                <b>Costo en creditos:</b>
                <span>{cost_in_credits}</span>
                <li>
                    <b>Longitud:</b>
                    <span>{length}</span>
                </li>
                <li>
                    <b>Tripulacion:</b>
                    <span>{crew}</span>
                </li>
            </ul>
        </div>
    )
}