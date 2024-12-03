import React, { FC } from 'react';

interface Fase4Props {
  setFase: (fase: number) => void;
  itemsArray: string[];
  setItemsArray: React.Dispatch<React.SetStateAction<string[] | []>>;
}

const Fase4: FC<Fase4Props> = ({ setFase, itemsArray, setItemsArray }) => {
  const options = [
    'revista ventanas-puertas españa',
    'revista ventanas-puertas latam',
    'revista quién es quién',
    'revista hueco arquitectura',
    'perfil de empresa en vidrioperfil',
    'banner en vidrioperfil',
    'banner en newsletter',
    'newsletter personalizado',
  ];

  const handleCheckboxChange = (option: string) => {
    setItemsArray((prev: string[]) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleFaseChange = (nextFase: number) => {
    setFase(nextFase);
  };

  // Verificar si hay al menos un checkbox seleccionado
  const isFormValid = itemsArray.length > 0;

  return (
    <div className="flex flex-col my-24">
      <p className="text-2xl pb-5">¿Qué productos deseas agregar a la propuesta?</p>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={itemsArray.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <div className="text-center pt-5">
        <button
          type="submit"
          onClick={() => handleFaseChange(5)}
          className={`h-9 w-36 rounded-lg text-sm ${
            isFormValid ? 'bg-gray-300 text-gray-800' : 'bg-gray-500 text-gray-800'
          }`}
          disabled={!isFormValid}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Fase4;
