import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Componentes/Navbar/NavBar';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import { ItemDetailContainer } from './Pages/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './Pages/ItemListContainer/ItemListContainer';
import { Footer } from "./Componentes/Footer/Footer"
import { MiCompra } from './Pages/MiCompra';



export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={ItemListContainer} />
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Item/:Itemid" exact component={ItemDetailContainer} />
      <Route path="/MiCompra" exact component={MiCompra} />
      <Route path="/Categoria/:categoriaID" component={ItemListContainer}/>
          <Footer />

    </Router>

  );
}

