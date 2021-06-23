
import CartWidgets from "./CartWidgets/CartWidgets";

function NavBar() {
  
  
  return (
    <div>
      <nav>
        <div className="menu">
          <label className="icono">Pepe's web</label>
          <ul className="menu_items" id="MeItems">
            <li><a href="index.html">Inicio</a></li>
            <li><a>Mi compra</a>
              <CartWidgets />
            </li>
            <li><a>Boton 2</a></li>
            <li><a>Boton 3</a></li>
          </ul>
          <ul className="menu_right">
            <li> <a>iniciar Secion</a> </li>
            <li> <a>Registrarse</a> </li>

          </ul>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;