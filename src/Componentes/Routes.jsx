import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './Pages/Inicio';
/* import NavBar from './Navbar/NavBar'; */
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import MoreInfo from './Pages/MoreInfo';
/* import { Ups } from "./Pages/Ups" */
import { Footer } from "./Footer/Footer"
import { MiCompra } from './Pages/MiCompra';

export const Routes = () => {
  return (
    <Router>
      
        {/* <NavBar /> */}
        <Route path="/" exact component={Inicio} />
        <Route path="/Registro" exact component={Registro} />
        <Route path="/Login" exact component={Login} />
        <Route path="/MoreInfo" exact component={MoreInfo} />
        <Route path="/MiCompra" exact component={MiCompra}/>
        {/* <Route path='*' component={Ups}/>    */}     
        <Footer />
      
    </Router>

  );
}

