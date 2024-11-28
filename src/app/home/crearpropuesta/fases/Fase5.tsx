import React, { FC, useState, useEffect } from 'react';

interface Fase5Props {
  setFase: (fase: number) => void;
  isExchange: boolean;
  itemsArray: string[];
  setItemsArray: React.Dispatch<React.SetStateAction<string[]>>;
}

const Fase5: FC<Fase5Props> = ({ setFase, isExchange, itemsArray, setItemsArray }) => {
  const [conceptos, setConceptos] = useState<{ concepto: string; precio: number; descuento: number; precioFinal: number }[]>([]);

  // Este efecto se ejecuta cuando `itemsArray` cambia, y genera un nuevo array de conceptos.
  useEffect(() => {
    const nuevosConceptos = itemsArray.map(item => ({
      concepto: item,
      precio: 0,  // Inicializado en 0
      descuento: 0,  // Inicializado en 0
      precioFinal: 0,  // Inicializado en 0
    }));
    setConceptos(nuevosConceptos);
  }, [itemsArray]);

  // Actualizar el precio o descuento de un concepto en particular
  const handleInputChange = (index: number, field: 'precio' | 'descuento', value: number) => {
    const nuevosConceptos = [...conceptos];
    nuevosConceptos[index] = {
      ...nuevosConceptos[index],
      [field]: value,
      precioFinal: nuevosConceptos[index].precio - nuevosConceptos[index].descuento,  // Calcular precio final
    };
    setConceptos(nuevosConceptos);
  };

  const handleDeleteToggle = (index: number) => {
    const nuevosConceptos = [...conceptos];
    nuevosConceptos.splice(index, 1);  // Eliminar el concepto
    setConceptos(nuevosConceptos);
  };

  const handleContinue = () => {
    // Aquí puedes agregar la lógica para continuar con el flujo o guardar la información
    console.log("Continuar con el proceso");
  };

  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
  };

  return (
    <div className="overflow-x-auto flex flex-col">
      
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Concepto</th>
            <th className="px-4 py-2 text-left">Precio</th>
            {!isExchange && <th className="px-4 py-2 text-left">Descuento</th>}
            <th className="px-4 py-2 text-left">Precio Final</th>
            <th className="px-4 py-2 text-left">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {conceptos.map((concepto, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={concepto.concepto}
                  className="w-full p-2 border border-gray-300 rounded"
                  readOnly
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={concepto.precio}
                  onChange={(e) => handleInputChange(index, 'precio', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              {!isExchange && (
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={concepto.descuento}
                    onChange={(e) => handleInputChange(index, 'descuento', parseFloat(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </td>
              )}
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={concepto.precioFinal}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteToggle(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón Continuar */}
      <div className="mt-6 text-center">
        <button
          onClick={()=>{handleFaseChange(6)}}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Fase5;
