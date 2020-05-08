import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
  // state del presupuesto
  const [presupuesto, setpresupuesto] = useState(0);
  // state del restante
  const [restante, setrestante] = useState(0);
  // state condicional
  const [mostrarpregunta, setmostrarpregunta] = useState(true);
  // state guardar gasto
  const [gastos, setgastos] = useState([]);

  // cuando se agregue un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    setgastos([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              setpresupuesto={setpresupuesto}
              setrestante={setrestante}
              setmostrarpregunta={setmostrarpregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
