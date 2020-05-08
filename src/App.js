import React, { useState } from 'react';
import Pregunta from './components/Pregunta';

function App() {
  // state del presupuesto
  const [presupuesto, setpresupuesto] = useState(0);
  // state del restante
  const [restante, setrestante] = useState(0);
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
          setpresupuesto={setpresupuesto}
          setrestante={setrestante}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
