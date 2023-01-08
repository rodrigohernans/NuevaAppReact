import "./App.css";

import Boton from "./componentes/Boton/Boton";
import Layout from "./layout/Layout";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const disminuirNumero = () => {
    return setCount(count - 1);
  };
  const aumentarNumero = () => {
    return setCount(count + 1);
  };
  const reIniciar = () => {
    return setCount(0);
  };

  return (
    <div className="App">
      <Layout>
        <Boton type="clase3" texto={count} />
        <br />
        <Boton type="clase0" texto="-" accion={disminuirNumero} />
        <Boton type="clase1" texto="Reiniciar Numero" accion={reIniciar} />
        <Boton type="clase2" texto="+" accion={aumentarNumero} />
      </Layout>
    </div>
  );
}

export default App;

/* <button onClick={cambiarNumero}> Aumentar Numero</button> */
