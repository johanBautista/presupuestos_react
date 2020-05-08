import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {
  // state cantidad ingresada
  const [cantidad, setcantidad] = useState(0);
  // state error
  const [error, seterror] = useState(false);

  // captura el presupuesto ingresado
  const definirPresupuesto = (e) => {
    setcantidad(parseInt(e.target.value));
  };

  // agregar presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validacion
    if (cantidad <= 0 || isNaN(cantidad)) {
      seterror(true);
      return;
    }
    //eliminar error
    seterror(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="ingresa tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
