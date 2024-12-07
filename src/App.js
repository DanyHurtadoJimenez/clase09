import logo from "./logo.svg";
import "./App.css";
import Formulario from "./ejemplo1/formulario/Formulario";
import Resultado from "./ejemplo1/resultado/Resultado";
import FormularioContador from "./ejemplo2/FormularioContador";

function App() {
  return (
    <div className="App">
      <Formulario></Formulario>
      <Resultado></Resultado>
      <FormularioContador></FormularioContador>
    </div>
  );
}

export default App;
