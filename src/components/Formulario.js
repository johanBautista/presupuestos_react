import React, { useState } from 'react';

const Formulario = () => {
  // state del nombre del gasto
  const [nombre, setnombre] = useState('');
  // state de la cantidad del gasto
  const [cantidadgasto, setcantidadgasto] = useState(0);

  // func agregar gasto
  const agregarGasto = (e) => {
    e.preventDefault();
    //validacion

    //construir el gasto

    //pasar el gasto al comp padre

    //recetear el form 
  };

  return (
    <div>
      <h2>ingresa tu gasto</h2>
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

export default Formulario;
