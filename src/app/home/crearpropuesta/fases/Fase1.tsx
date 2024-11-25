import React, { FC } from 'react';

interface Fase1Props {
  
}

const Fase1: FC<Fase1Props> = ({ }) => {
  return (
    <div>
        <p>Datos del cliente</p>
        <p>Introduce el código de cliente</p>
        <input />
        <button>Continuar</button>
    </div>
  );
};

export default Fase1;