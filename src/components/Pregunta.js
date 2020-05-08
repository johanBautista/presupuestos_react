import React, { Fragment } from 'react';

const Pregunta = () => {
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form action="">
        <input
          type="number"
          className="u-full-width"
          placeholder="ingresa tu presupuesto"
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
