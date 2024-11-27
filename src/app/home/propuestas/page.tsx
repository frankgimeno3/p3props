import React, { FC } from 'react';

interface PropuestasProps {}

const Propuestas: FC<PropuestasProps> = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Aquí se deben ver todas las propuestas
      </h1>
      <p className="text-gray-600 mb-6">Quiero ver propuestas de...</p>
      
      {/* Filtros */}
      <div className="bg-white p-4 shadow-md rounded-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Filtro por Agente */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Agente:</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>una opción por cada agente</option>
            </select>
          </div>

          {/* Filtro por Cliente */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cliente:</label>
            <input
              type="text"
              placeholder="Inserte número de cliente"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Buscar
        </button>
      </div>

      {/* Tabla de Resultados */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <p className="text-gray-700 mb-4">
          Aquí debe ir una tabla con columnas num cliente&quot;, nombre agente, nombre propuesta, eliminar
        </p>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border px-4 py-2">Nombre Cliente</th>
              <th className="border px-4 py-2">Nombre Agente</th>
              <th className="border px-4 py-2">Nombre Propuesta</th>
              <th className="border px-4 py-2">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {/* Filas de ejemplo */}
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">LISEC</td>
              <td className="border px-4 py-2 text-center">Frank Gimeno</td>
              <td className="border px-4 py-2 text-center">Propuesta 1 - 2024</td>
              <td className="border px-4 py-2 text-center">
                <button className="text-red-500 hover:underline">Eliminar</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">SITEC</td>
              <td className="border px-4 py-2 text-center">Rosa Ruiz</td>
              <td className="border px-4 py-2 text-center">Propuesta 2 - 2024</td>
              <td className="border px-4 py-2 text-center">
                <button className="text-red-500 hover:underline">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Propuestas;
