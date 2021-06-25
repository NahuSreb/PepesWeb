import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { useState, useEffect } from "react";


function Inicio() {

  return (
    <div>
      <h1>Nuestros productos</h1>
      <ItemListContainer />
    </div>
  );

}

export default Inicio;