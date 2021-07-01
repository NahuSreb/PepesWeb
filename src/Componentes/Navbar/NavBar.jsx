import { Link } from "react-router-dom";
import { useState } from "react";
import { CartWidgets } from "../CartWidgets/CartWidgets";

function NavBar() {
  const [login, setLogin] = useState(true)

  return (
    <div>
      <nav>
        <div className="menu">
          <label className="icono">Pepe's web</label>
          <ul className="menu_items" id="MeItems">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="">Boton 2</Link></li>
            <li><Link to="">Boton 3</Link></li>
          </ul>

          {login == true ? (
            <ul className="menu_right">
              <li><Link to="/Carrito">Carrito</Link>
              <CartWidgets />
              </li>
            </ul>
          ) :
            (<ul className="menu_right">
              <li> <Link to="/Login">Iniciar Secion</Link></li>
              <li> <Link to="/Registro" >Registrarse</Link></li>
            </ul>
            )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;