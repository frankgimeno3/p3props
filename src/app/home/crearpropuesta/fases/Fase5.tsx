import React, { FC, useState } from 'react';

interface Fase5Props {
  items: { concepto: string, precio: number, descuento: number }[];
}

const Fase5: FC<Fase5Props> = ({ items }) => {
  const [deleteStates, setDeleteStates] = useState<boolean[]>(new Array(items.length).fill(false));

  const handleDeleteToggle = (index: number) => {
    const newDeleteStates = [...deleteStates];
    newDeleteStates[index] = !newDeleteStates[index];
    setDeleteStates(newDeleteStates);
  };

  const handleContinue = () => {
    // Aquí puedes agregar la lógica para continuar con el flujo o guardar la información
    console.log("Continuar con el proceso");
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Concepto</th>
            <th className="px-4 py-2 text-left">Precio</th>
            <th className="px-4 py-2 text-left">Descuento</th>
            <th className="px-4 py-2 text-left">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={item.concepto}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={item.precio}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={item.descuento}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteToggle(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                >
                  {deleteStates[index] ? 'Click para cancelar eliminar' : 'Click para eliminar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón Continuar */}
      <div className="mt-6 text-center">
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Fase5;
