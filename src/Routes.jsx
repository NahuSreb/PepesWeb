import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from './Componentes/Navbar/NavBar';
import { ItemListContainer } from './Pages/ItemListContainer/ItemListContainer';
import { Registro } from './Pages/Registro';
import { Login } from './Pages/Login';
import { ItemDetailContainer } from './Pages/ItemDetailContainer/ItemDetailContainer';
import { MiCompra } from './Pages/MiCompra';
import { Cart } from "./Componentes/Cart/Cart";
import { TerminarCompra } from "./Componentes/TerminarCompra/TerminarCompra";
import { Footer } from "./Componentes/Footer/Footer";
import { Container } from "react-bootstrap";
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Routes = () => {
  const [login, setLoging] = useState(false)
  return (
    <CartProvider>
      <Router>
        <NavBar login={login} setLoging={setLoging} />
        <Container>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/Registro" exact component={Registro} />
          <Route path="/Login" exact component={() => <Login setLoging={setLoging} />} />
          <Route path="/Item/:itemId" exact component={ItemDetailContainer} />
          <Route path="/MiCompra" exact component={MiCompra} />
          <Route path="/Categoria/:categoriaID" component={ItemListContainer} />
          <Route path="/carrito" component={Cart} />
          <Route path="/TerminarCompra" component={TerminarCompra} />
          <Footer />
        </Container>
      </Router>
    </CartProvider>
  );
}

