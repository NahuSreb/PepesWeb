
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CartWidgets } from "../CartWidgets/CartWidgets";

function NavBar() {
  const [login, setLogin] = useState(true)

  return (
    <div>
      <nav>
        <div className="menu">
          <label className="icono">Pepe's web</label>
          <ul className="menu_left">
            <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/">Inicio</NavLink></li>
            <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/Categoria/Comidas">Comidas</NavLink></li>
            <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/Categoria/Bebidas">Bebidas</NavLink></li>
          </ul>

          {login == true ? (
            <ul className="menu_right">
              <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/Carrito">Carrito</NavLink>
              <CartWidgets />
              </li>
            </ul>
          ) :
            (<ul className="menu_right">
              <li> <NavLink activeClassName="menu__link-active" className="menu__link" to="/Login">Iniciar Secion</NavLink></li>
              <li> <NavLink activeClassName="menu__link-active" className="menu__link" to="/Registro" >Registrarse</NavLink></li>
            </ul>
            )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;