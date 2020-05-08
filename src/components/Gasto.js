import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ gasto }) => {
  const { nombre, cantidadgasto } = gasto;
  return (
    <li className="gastos">
      <p>
        {nombre}
        <span className="gasto">$ {cantidadgasto} </span>
      </p>
    </li>
  );
};

Gasto.protoTypes = {
  gasto: PropTypes.object.isRequired,
};

export default Gasto;
