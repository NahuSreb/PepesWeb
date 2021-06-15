

function NavBar() {
    return (
        <div>
               <nav>
      <div className="menu">
        <label  className="icono">Pepe's web</label>
        <ul className="menu_items" id="MeItems">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="">boton 1</a></li>
          <li><a href="">Boton 2</a></li>
          <li><a href="">Boton 3</a></li>
        </ul>
        <ul className="menu_right">
          <li> <a href="http://">iniciar Secion</a> </li>
          <li> <a href="http://">Registrarse</a> </li>
          <span className="btn_menu" onclick="showmenu()">
            <i className="fa fa-bars"></i>
          </span>
        </ul>

      </div>
    </nav>
        </div>
    );
}

export default NavBar;