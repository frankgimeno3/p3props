"use client";

import { FormEvent, useState } from "react";
import { addUser } from "@/lib/userActions/addUser";

export default function Home() {
  const [numeroAgente, setNumeroAgente] = useState("");
  const [nombreAgente, setNombreAgente] = useState("");

  const handleUserSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Llamamos a la función addUser pasando el numeroAgente y nombreAgente
      await addUser(numeroAgente, nombreAgente);
      // Opcional: Limpiar los campos después de la creación
      setNumeroAgente("");
      setNombreAgente("");
    } catch (error) {
      console.error("Error al crear el agente:", error);
      // Aquí puedes agregar algún mensaje de error si lo deseas
    }
  };

  return (
    <>
      <form onSubmit={handleUserSubmit} className="mx-auto">
        <div className="mb-5">
          <label
            htmlFor="numeroAgente"
            className="block mb-2 text-sm font-medium text-white"
          >
            Número del agente
          </label>
          <input
            type="text"
            id="numeroAgente"
            value={numeroAgente}
            onChange={(e) => setNumeroAgente(e.target.value)}
            placeholder="Introduzca el número del agente"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombreAgente"
            className="block mb-2 text-sm font-medium text-white"
          >
            Nombre del agente
          </label>
          <input
            type="text"
            id="nombreAgente"
            value={nombreAgente}
            onChange={(e) => setNombreAgente(e.target.value)}
            placeholder="Introduzca nombre del agente"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
            required
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Crear agente
        </button>
      </form>
    </>
  );
}
