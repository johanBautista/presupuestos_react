import React from 'react';

const Formulario = () => {
  return (
    <div>
      <h2>ingresa tu gasto</h2>
      <form action="">
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input type="text" className="u-full-width" placeholder="Ej. 300" />
        </div>
        <input type="submit" value="Agregar Gasto" className="u-full-width button-primary" />
      </form>
    </div>
  );
};

export default Formulario;
