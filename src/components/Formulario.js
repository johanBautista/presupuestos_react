import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Error from './Error';

const Formulario = ({ setgasto, setcreargasto }) => {
  // state del nombre del gasto
  const [nombre, setnombre] = useState('');
  // state de la cantidad del gasto
  const [cantidadgasto, setcantidadgasto] = useState(0);
  // state del error de gasto
  const [errorgasto, seterrorgasto] = useState(false);

  // func agregar gasto
  const agregarGasto = (e) => {
    e.preventDefault();
    //validacion
    if (cantidadgasto <= 0 || isNaN(cantidadgasto) || nombre.trim() === '') {
      seterrorgasto(true);
      return;
    }
    seterrorgasto(false);
    //construir el gasto
    const gasto = {
      nombre,
      cantidadgasto,
      id: shortid.generate(),
    };

    //pasar el gasto al comp padre
    setgasto(gasto);
    setcreargasto(true);
    //recetear el form
    setnombre('');
    setcantidadgasto(0);
  };

  return (
    <div>
      <h2>ingresa tu gasto</h2>
      {errorgasto ? (
        <Error mensaje="Todos los campos son obligatorios" />
      ) : null}

      <form onSubmit={agregarGasto}>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidadgasto}
            onChange={(e) => setcantidadgasto(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type="submit"
          value="Agregar Gasto"
          className="u-full-width button-primary"
        />
      </form>
    </div>
  );
};

Formulario.protoTypes = {
  setgasto: PropTypes.func.isRequired,
  setcreargasto: PropTypes.func.isRequired,
};

export default Formulario;
