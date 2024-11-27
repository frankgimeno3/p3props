import React, { FC } from 'react';

interface Fase1Props {
  setFase: (fase: number) => void;
  clientId:string;
  setClientId: (clientId: string) => void;  
}

const Fase1: FC<Fase1Props> = ({setFase, clientId, setClientId }) => {
  
  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
   };


  return (
    <div>
        <p>Datos del cliente</p>
        <p>Introduce el código de cliente</p>
        <input />
        <button onClick={()=>{handleFaseChange(2)}}>Continuar</button>
    </div>
  );
};

export default Fase1;