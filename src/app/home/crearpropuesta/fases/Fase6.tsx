import React, { FC, useState } from 'react';

interface Fase6Props {
  setFase: (fase: number) => void;
  descuento: number;
  setDescuento:React.Dispatch<React.SetStateAction<number>>;
  precioTotal: number;
  setPrecioTotal:React.Dispatch<React.SetStateAction<number>>;
}

const Fase6: FC<Fase6Props> = ({setFase, descuento, setDescuento, precioTotal, setPrecioTotal }) => {
  const [isDescuentoVisible, setIsDescuentoVisible] = useState(false);
  const [isImpuestoVisible, setIsImpuestoVisible] = useState(false);
  const [descuentoTipo, setDescuentoTipo] = useState<'%' | 'numero'>('%' as 'numero');
  const [impuesto, setImpuesto] = useState<number>(0);

  const handleDescuentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDescuento(value);
  };

  const handleDescuentoTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDescuentoTipo(e.target.value as '%' | 'numero');
  };

  const calcularDescuento = () => {
    if (descuentoTipo === '%') {
      return (precioTotal * descuento) / 100;
    }
    return descuento;
  };

  const calcularImpuesto = () => {
    return isImpuestoVisible ? (precioTotal * 0.21) : 0;
  };

  const precioFinal = precioTotal - calcularDescuento() + calcularImpuesto();

   const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
   };

  return (
    <div className="flex flex-col space-y-6">
      {/* Precio Total y botón ver desagregado */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Precio Total: ${precioTotal.toFixed(2)}</h2>
        <button
          onClick={() => setIsDescuentoVisible(!isDescuentoVisible)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          {isDescuentoVisible ? 'Ocultar Desagregado' : 'Ver Desagregado'}
        </button>
      </div>

      {/* Descuento */}
      {isDescuentoVisible && (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              onChange={() => setIsDescuentoVisible(!isDescuentoVisible)}
              id="descuento"
              className="h-5 w-5"
            />
            <label htmlFor="descuento" className="text-lg">Descuento?</label>
          </div>
          {isDescuentoVisible && (
            <div className="flex items-center space-x-4">
              <select
                value={descuentoTipo}
                onChange={handleDescuentoTipoChange}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="%">%</option>
                <option value="numero">Número</option>
              </select>
              <input
                type="number"
                value={descuento}
                onChange={handleDescuentoChange}
                className="p-2 border border-gray-300 rounded w-24"
                placeholder={descuentoTipo === '%' ? 'Porcentaje' : 'Cantidad'}
              />
            </div>
          )}
        </div>
      )}

      {/* Impuesto */}
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          onChange={() => setIsImpuestoVisible(!isImpuestoVisible)}
          id="impuesto"
          className="h-5 w-5"
        />
        <label htmlFor="impuesto" className="text-lg">Impuesto?</label>
        {isImpuestoVisible && (
          <div className="ml-4 text-lg font-semibold">
            ${calcularImpuesto().toFixed(2)}
          </div>
        )}
      </div>

      {/* Precio Final */}
      <div className="text-4xl font-bold mt-6 text-center">
        Precio Final: ${precioFinal.toFixed(2)}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={()=>{handleFaseChange(7)}}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Fase6;
