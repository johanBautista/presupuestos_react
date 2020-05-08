import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  // state del presupuesto
  const [presupuesto, setpresupuesto] = useState(0);
  // state del restante
  const [restante, setrestante] = useState(0);
  // state condicional
  const [mostrarpregunta, setmostrarpregunta] = useState(true);
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
                <Formulario />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
