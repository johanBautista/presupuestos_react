import React from 'react';

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

export default Gasto;
