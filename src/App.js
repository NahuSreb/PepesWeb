import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './Componentes/Pages/Inicio';
import NavBar from './Componentes/Navbar/NavBar';
import Registro from './Componentes/Pages/Registro';
import Login from './Componentes/Pages/Login';
import MoreInfo from './Componentes/Pages/MoreInfo';

function App() {
  return (
    <BrowserRouter>
          <NavBar />
      <Route path="/" exact component={Inicio} />
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Login" exact component={Login} />
      <Route path="/MoreInfo" exact component={MoreInfo} />
    </BrowserRouter>

  );
}

export default App;
