import React, { FC, useState, useEffect } from 'react';

interface Fase1Props {
  setFase: (fase: number) => void;
  clientId: string;
  setClientId: (clientId: string) => void;
}

const Fase1: FC<Fase1Props> = ({ setFase, clientId, setClientId }) => {
  const [inputValue, setInputValue] = useState(clientId); // Inicializa con clientId recibido por props

  // Actualiza inputValue si el clientId cambia desde el padre
  useEffect(() => {
    setInputValue(clientId);
  }, [clientId]);

  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newClientId = e.target.value;
    setInputValue(newClientId); // Actualiza el valor del estado local
    setClientId(newClientId); // Actualiza el clientId en el componente padre
  };

  return (
    <div className="px-44 flex flex-col my-36">
      <p className="text-2xl py-5">
        Introduce un código de cliente para comenzar a crear una propuesta
      </p>
      <div className="flex flex-row items-center">
        <input
          className="w-full pl-3 py-2 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
          placeholder="Número de cliente aquí"
          value={inputValue}  
          onChange={handleInputChange} 
        />
        <button
          onClick={() => {
            handleFaseChange(2);
          }}
          className={`h-9 ml-5 w-36 rounded-lg mx-auto text-sm ${
            inputValue.trim()
              ? 'bg-gray-300 text-gray-800'
              : 'bg-gray-500 text-gray-800'
          }`}  
          disabled={!inputValue.trim()}  
        >
          Continuar
        </button>
      </div>
      
    </div>
  );
};

export default Fase1;
