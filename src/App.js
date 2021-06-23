import './App.css';
/* import Registro from './Componentes/Registro/Registro' */
import Inicio from './Componentes/Inicio/Inicio';
import NavBar from './Componentes/Navbar/NavBar'

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Inicio />
      </main>
    </div>
  );
}

export default App;
