import React, { FC, useState } from 'react';

interface Fase6DescuentoProps {
  descuentoFinal: number;
  setDescuentoFinal: React.Dispatch<React.SetStateAction<number>>;
  precioTotal: number;
  descuentoTipo: string;
  setDescuentoTipo: React.Dispatch<React.SetStateAction<string>>;
}

const Fase6Descuento: FC<Fase6DescuentoProps> = ({ 
  descuentoFinal, 
  setDescuentoFinal, 
  precioTotal, 
  descuentoTipo, 
  setDescuentoTipo 
}) => {
  const [valorIntroducido, setValorIntroducido] = useState<number>(0);

  const handleDescuentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValorIntroducido(value);

    const finalValue = descuentoTipo === '%' 
      ? precioTotal * (value / 100) 
      : value;

    setDescuentoFinal(finalValue);
  };

  const handleDescuentoTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTipo = e.target.value as '%' | 'numero';
    setDescuentoTipo(newTipo);
    setValorIntroducido(0); 
    setDescuentoFinal(0);    
  };

  return (
    <div className="flex flex-col text-left justify-left mt-2 mb-6 bg-gray-900 bg-opacity-60 rounded-lg">
      <p className="text-xs pl-3 pt-2 opacity-50">Descuento</p>

      <div className="flex flex-row items-center px-12 pt-1">
        <label className="text-white w-44" htmlFor="descuento-tipo">Tipo de descuento</label>
        <select
          id="descuento-tipo"
          value={descuentoTipo}
          onChange={handleDescuentoTipoChange}
          className="px-2 my-1 border border-gray-300 rounded ml-6 w-44 h-8 text-xs"
        >
          <option value="%">%</option>
          <option value="numero">Valor exacto</option>
        </select>
      </div>

      <div className="flex flex-row items-center px-12 pb-5">
        <label className="text-white w-44" htmlFor="valor-descuento">Valor del descuento</label>
        <input
          id="valor-descuento"
          type="number"
          value={valorIntroducido}
          onChange={handleDescuentoChange}
          className="px-2 my-1 border border-gray-300 rounded ml-6 w-44 h-8 text-xs"
          placeholder={descuentoTipo === '%' ? 'Porcentaje' : 'Cantidad'}
        />
      </div>

      <div className="flex flex-row items-center px-12 pb-5">
        <p className="text-white w-44">Descuento final:</p>
        <p className="text-white">{descuentoFinal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Fase6Descuento;
