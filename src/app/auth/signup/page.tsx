"use client";

import React, { useState } from "react";
import { handleSignUp } from "@/lib/cognitoActions";
import { addUser } from "@/lib/userActions/addUser"; // Importamos la función para DynamoDB
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./button";
import { useRedirection } from "@/utils/routingUtils";

export default function SignUpPage() {
  const [errorMessage, dispatch] = useFormState(handleSignUp, undefined);
  const { pending } = useFormStatus();
  const handleRedirection = useRedirection();

  // Campos adicionales para DynamoDB
  const [email, setEmail] = useState("");
  const [numeroAgente, setNumeroAgente] = useState("");
  const [nombreAgente, setNombreAgente] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Crear FormData desde el formulario

    try {
      // Crear usuario en Cognito
      await dispatch(formData);

      // Crear usuario en DynamoDB con los campos adicionales
      await addUser(numeroAgente, nombreAgente, email);

      // Redirigir después de la creación exitosa
      handleRedirection("/");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-gray-600">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Please create an account.</h1>

        <div className="w-full">
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password" // Asegúrate de que coincida con los valores usados en FormData
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>

          {/* Campo para número de agente */}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="numeroAgente"
            >
              Número del agente
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="numeroAgente"
                type="text"
                value={numeroAgente}
                onChange={(e) => setNumeroAgente(e.target.value)}
                placeholder="Introduzca el número del agente"
                required
              />
            </div>
          </div>

          {/* Campo para nombre de agente */}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nombreAgente"
            >
              Nombre del agente
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="nombreAgente"
                type="text"
                value={nombreAgente}
                onChange={(e) => setNombreAgente(e.target.value)}
                placeholder="Introduzca el nombre del agente"
                required
              />
            </div>
          </div>
        </div>

        <Button className="mt-4 w-full" aria-disabled={pending}>
          Crear cuenta
        </Button>

        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </form>
  );
}
