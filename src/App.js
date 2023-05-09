import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/Inicio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <Router>
        <Banner></Banner>

        <Switch>

          {/* INÍCIO */}
          <Route
            exact path="https://ritacsrangel.github.io/challenge-react-cep">
            <Inicio></Inicio>
          </Route>

          <Route
            exact path="https://ritacsrangel.github.io/challenge-react-cep/inicio">
            <Inicio></Inicio>
          </Route>

          {/* INÍCIO */}
          <Route
            exact path="https://ritacsrangel.github.io/challenge-react-cep/formulario">
            <Formulario></Formulario>
          </Route>


        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
