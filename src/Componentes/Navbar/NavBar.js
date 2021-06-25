
import CartWidgets from "./CartWidgets/CartWidgets";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div>
      <nav>
        <div className="menu">
          <label className="icono">Pepe's web</label>
          <ul className="menu_items" id="MeItems">
            <li><button><Link to="/">Inicio</Link></button></li>
            <li><button><Link to="">Mi compra</Link></button>
              <CartWidgets />
            </li>
            <li><button><Link to="">Boton 2</Link></button></li>
            <li><button><Link to="">Boton 3</Link></button></li>
          </ul>
          <ul className="menu_right">
            <li> <button><Link to="/Login">iniciar Secion</Link></button></li>
            <li> <button><Link to="/Registro" >Registrarse</Link></button></li>

          </ul>

        </div>
      </nav>
    </div>
      );
}

      export default NavBar;