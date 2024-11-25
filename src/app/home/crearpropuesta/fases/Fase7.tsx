import React, { FC } from 'react';

interface Fase7Props {
  
}

const Fase7: FC<Fase7Props> = ({ }) => {
  return (
    <div>
        <p>Propuesta creada... </p>
        <p>Qué hacemos con ella?</p>
        <button>Imprimir</button>

        <p>Guarda la propuesta para poder acceder a ella posteriormente</p>
        <input placeholder='introducir nombre de la propuesta'/>
        <button>Guardar</button>
    </div>
  );
};

export default Fase7;