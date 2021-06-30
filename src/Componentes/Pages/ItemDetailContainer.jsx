import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [ship, setShip] = useState(undefined)

  useEffect(() => {
    const getShip = async () => {
      const response = await fetch("https://swapi.dev/api/starships/9/")
      const ship = await response.json()
      setShip(ship)
    }
    getShip()
  }, [])
  return (
    <div className="show-article">
      <div >

        {ship ? (
          <div className="ItemDetailContainer">
            <ul>
              <li>
                <b>Nombre:</b>
                <span>{ship.name}</span>
              </li>
              <li>
                <b>Modelo:</b>
                <span>{ship.model}</span>
              </li>
              <li>
                <b>Creada por:</b>
                <span>{ship.manufacturer}</span>
              </li>
              <b>Costo en creditos:</b>
              <span>{ship.cost_in_credits}</span>
              <li>
                <b>Longitud:</b>
                <span>{ship.length}</span>
              </li>
              <li>
                <b>Tripulacion:</b>
                <span>{ship.crew}</span>
              </li>
            </ul>
          </div>) :
          (
            <p>cargando...</p>
          )}
        <p><Link to="/">Volver al Inicio</Link></p>
      </div>
    </div>
  );

}



