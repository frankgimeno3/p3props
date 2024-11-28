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

  const handleContinue = () => {
    console.log('Selected options:', itemsArray);
  };

  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
  };

  return (
    <div className='flex flex-col'>
      <p>¿Qué productos deseas agregar a la propuesta?</p>
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
      <button onClick={()=>{handleFaseChange(5)}}>Continuar</button>
    </div>
  );
};

export default Fase4;
