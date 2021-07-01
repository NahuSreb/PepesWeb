import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import { Ups } from "./Pages/Ups"
import { Footer } from "./Footer/Footer"
import { MiCompra } from './Pages/MiCompra';
import { Category } from './Category/Category';


export const Routes = () => {
  return (
    <Router>

      <NavBar />
      <Route path="/" exact component={ItemListContainer} />
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Login" exact component={Login} />
      <Route path="/MoreInfo" exact component={ItemDetailContainer} />
      <Route path="/MiCompra" exact component={MiCompra} />
      <Route path="/Categoria/:categoriaId" component={Category}/>
      {/* <Route path='*' component={Ups}/>   */} 
      <Footer />

    </Router>

  );
}

