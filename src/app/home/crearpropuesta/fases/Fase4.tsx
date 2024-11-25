import React, { FC, useState } from 'react';

interface Fase4Props {}

const Fase4: FC<Fase4Props> = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    console.log('Selected options:', selectedOptions);
    // Aquí puedes manejar lo que ocurre al presionar el botón "Continuar"
  };

  return (
    <div>
      <p>¿Qué productos deseas agregar a la propuesta?</p>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <button onClick={handleContinue}>Continuar</button>
    </div>
  );
};

export default Fase4;
