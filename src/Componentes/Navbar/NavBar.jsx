
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartWidgets } from "../CartWidgets/CartWidgets";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/CartContext";

function NavBar() {
  const { cantidadCar } = useContext(CartContext)
  const [login/* , setLogin */] = useState(true)
  const { name } = useContext(UserContext)
  console.log(name)
  return (
    <div>
      <nav>
        <div className="menu">
          <Link to="/"><p className="icono">Pepe's web</p></Link>
          <ul className="menu_left">
            <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/">Inicio</NavLink></li>
            <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/Categoria/Comidas">Comidas</NavLink></li>
            <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/Categoria/Bebidas">Bebidas</NavLink></li>
          </ul>

          {login === true ? (
            <ul className="menu_right">
              <li><h1>{name}</h1></li>
              <li><NavLink activeClassName="menu__link-active" className="menu__link" to="/Carrito">Carrito ({cantidadCar}) </NavLink>
                <ul className="cartWidgets"><CartWidgets /></ul>
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