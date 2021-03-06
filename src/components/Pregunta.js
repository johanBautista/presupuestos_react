import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Pregunta = ({ setpresupuesto, setrestante, setmostrarpregunta }) => {
  // state cantidad ingresada
  const [cantidad, setcantidad] = useState(0);
  // state error
  const [error, seterror] = useState(false);

  // captura el presupuesto ingresado
  const definirPresupuesto = (e) => {
    setcantidad(parseInt(e.target.value, 10));
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
    // una vez hecha la validacion
    setpresupuesto(cantidad);
    setrestante(cantidad);
    setmostrarpregunta(false);
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

Pregunta.protoTypes = {
  setpresupuesto: PropTypes.func.isRequired,
  setrestante: PropTypes.func.isRequired,
  setmostrarpregunta: PropTypes.func.isRequired,
};

export default Pregunta;
