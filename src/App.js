import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  // state del presupuesto
  const [presupuesto, setpresupuesto] = useState(0);
  // state del restante
  const [restante, setrestante] = useState(0);
  // state condicional
  const [mostrarpregunta, setmostrarpregunta] = useState(true);
  // state guardar gasto
  const [gastos, setgastos] = useState([]);
  // state gasto en useEffect
  const [gasto, setgasto] = useState({});
  // state condicional de mostrar gasto
  const [creargasto, setcreargasto] = useState(false);

  //state que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      // agrega e nuevo presupuesto
      setgastos([...gastos, gasto]);
      //resta el gasto al presupuesto
      const presupuestoRestante = restante - gasto.cantidadgasto;
      setrestante(presupuestoRestante);
      // reset a false
      setcreargasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

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
                <Formulario setgasto={setgasto} setcreargasto={setcreargasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
