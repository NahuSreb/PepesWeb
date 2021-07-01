import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [ship, setShip] = useState(undefined)

  useEffect(() => {
    const getShip = async () => {
      const response = await fetch("https://swapi.dev/api/starships/9/")
      const ship = await response.json()
      setShip(ship)
    }
    getShip()
  }, 2000)
  return (
    <div className="show-article">
      {ship ? (
        <ItemDetail ship={ship} />) :
        (
          <p>cargando...</p>
        )}
    </div>
  );

}



