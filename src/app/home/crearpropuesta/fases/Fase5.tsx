import React, { FC, useEffect } from 'react';

interface Concepto {
  concepto: string;
  precioTarifa: number;
  descuento: number;
  precioUnitario: number;
}

interface Fase5Props {
  setFase: (fase: number) => void;
  isExchange: boolean;
  itemsArray: string[];
  setItemsArray: React.Dispatch<React.SetStateAction<string[]>>;
  precioTotal: number;
  setPrecioTotal: (precioTotal: number) => void;
  conceptos: Concepto[];
  setConceptos: React.Dispatch<React.SetStateAction<Concepto[]>>;
}

const Fase5: FC<Fase5Props> = ({
  setFase,
  isExchange,
  itemsArray,
  setItemsArray,
  precioTotal,
  setPrecioTotal,
  conceptos,
  setConceptos,
}) => {
  useEffect(() => {
    const nuevosConceptos = itemsArray.map((item) => {
      const conceptoExistente = conceptos.find((c) => c.concepto === item);
      return conceptoExistente
        ? conceptoExistente
        : {
            concepto: item,
            precioTarifa: 0.0,
            descuento: 0.0,
            precioUnitario: 0.0,
          };
    });
    setConceptos(nuevosConceptos);
  }, [itemsArray, conceptos, setConceptos]);

  const handleInputChange = (
    index: number,
    field: 'precioTarifa' | 'descuento' | 'concepto',
    value: string
  ) => {
    const nuevosConceptos = [...conceptos];
    if (field === 'concepto') {
      nuevosConceptos[index].concepto = value; // Actualiza el campo 'concepto'
    } else {
      const parsedValue = parseFloat(value) || 0; // Convertir el valor a número o usar 0 si no es válido

      nuevosConceptos[index][field] = parseFloat(parsedValue.toFixed(2)); // Guardar con dos decimales
      nuevosConceptos[index].precioUnitario = parseFloat(
        (nuevosConceptos[index].precioTarifa - nuevosConceptos[index].descuento).toFixed(2)
      ); // Recalcular precio unitario
    }

    setConceptos(nuevosConceptos);
  };

  const handleDeleteToggle = (index: number) => {
    const nuevosConceptos = [...conceptos];
    nuevosConceptos.splice(index, 1);
    setConceptos(nuevosConceptos);
  };

  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
  };

  // Función para calcular el precio total y actualizar el estado de precioTotal
  const calcularPrecioTotal = () => {
    const total = conceptos.reduce((total, concepto) => total + concepto.precioUnitario, 0);
    setPrecioTotal(parseFloat(total.toFixed(2))); // Usar el setter para actualizar el precioTotal
  };

  // Verifica si algún precio unitario es negativo o el precio total
  const isFormValid = !conceptos.some((concepto) => concepto.precioUnitario < 0) && precioTotal >= 0;

  // Llamar a calcularPrecioTotal cada vez que los conceptos cambian
  useEffect(() => {
    calcularPrecioTotal();
  }, [conceptos]);

  return (
    <div className="flex flex-col my-24">
      <p className="text-2xl pb-5">Añade descuentos o modifica precios unitarios</p>

      <table className="min-w-full border border-gray-50 border-opacity-5 text-gray-50 rounded">
        <thead>
          <tr className="bg-gray-900">
            <th className="px-4 py-2 text-left">Concepto</th>
            <th className="px-4 py-2 text-left">Precio Tarifa</th>
            {!isExchange && <th className="px-4 py-2 text-left">Descuento</th>}
            <th className="px-4 py-2 text-left">Precio Unitario</th>
            <th className="px-4 py-2 text-left">Borrar</th>
          </tr>
        </thead>
        <tbody className="bg-black">
          {conceptos.map((concepto, index) => (
            <tr key={index} className="border-t border-gray-200 border-opacity-10">
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={concepto.concepto}
                  onChange={(e) => handleInputChange(index, 'concepto', e.target.value)} // Actualiza el valor del concepto
                  className="w-full p-2 bg-transparent"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  step="0.01"
                  value={concepto.precioTarifa}
                  onChange={(e) => handleInputChange(index, 'precioTarifa', e.target.value)}
                  className="w-full p-2 bg-transparent"
                />
              </td>
              {!isExchange && (
                <td className="px-4 py-2">
                  <input
                    type="number"
                    step="0.01"
                    value={concepto.descuento}
                    onChange={(e) => handleInputChange(index, 'descuento', e.target.value)}
                    className="w-full p-2 bg-transparent"
                  />
                </td>
              )}
              <td className="px-4 py-2">
                <input
                  type="number"
                  step="0.01"
                  value={concepto.precioUnitario}
                  readOnly
                  className={`w-full p-2 bg-transparent ${concepto.precioUnitario < 0 ? 'text-red-500' : ''}`}
                />
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteToggle(index)}
                  className="px-4 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 focus:outline-none"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Div para el precio total */}
      <div className="flex items-center pt-5">
        <p className="text-2xl">Precio total</p>
        <p className={`text-xl ml-5 ${precioTotal < 0 ? 'text-red-500' : ''}`}>
          {precioTotal.toFixed(2)} €
        </p>
      </div>

      <div className="text-center pt-5">
        <button
          type="submit"
          onClick={() => handleFaseChange(6)}
          disabled={!isFormValid}
          className={`h-9 w-36 rounded-lg text-sm ${isFormValid ? 'bg-gray-300 text-gray-800' : 'bg-gray-500 text-gray-800'}`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Fase5;
