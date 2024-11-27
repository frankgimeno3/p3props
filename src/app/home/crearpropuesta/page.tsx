"use client"
import React, { FC, useState } from 'react';
 import { addPropuesta, Product } from '@/lib/propuestas/addPropuesta';
 import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/app/auth/signup/button';

interface CrearPropuestaProps {}

const CrearPropuesta: FC<CrearPropuestaProps> = ({ }) => {

  // const [errorMessage, dispatch] = useFormState(handleSignUp, undefined);
  const { pending } = useFormStatus();
  
  // Nuevos campos para la propuesta
  const [lang, setLang] = useState("");
  const [clientId, setClientId] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [impuesto, setImpuesto] = useState("");
  const [numeroAgente, setNumeroAgente] = useState("");

  // Estado para productos
  const [products, setProducts] = useState<Product[]>([]);
  
  // Función para agregar un producto
  const addProduct = () => {
    setProducts([
      ...products,
      { productId: '', productComments: '', productPrice: '' }
    ]);
  };

  // Función para manejar cambios en los productos
  const handleProductChange = (index: number, field: keyof Product, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setProducts(updatedProducts);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);  

    try {
      await addPropuesta(lang, clientId, products, descuento, impuesto, numeroAgente);
      
    } catch (error) {
      console.error("Error al crear la propuesta:", error);
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen p-44 text-gray-600'>
      <form onSubmit={handleSubmit} className="space-y-3 text-gray-600">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className="mb-3 text-2xl">Crear propuesta</h1>

          {/* Campos para lang, clientId, descuento, e impuesto */}
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="lang">
              Idioma
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
              id="lang"
              type="text"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              placeholder="Introduce el idioma"
              required
            />
          </div>

          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="clientId">
              ID del cliente
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
              id="clientId"
              type="text"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="Introduce el ID del cliente"
              required
            />
          </div>

          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="descuento">
              Descuento
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
              id="descuento"
              type="number"
              value={descuento}
              onChange={(e) => setDescuento(Number(e.target.value))}
              placeholder="Introduce el descuento"
              required
            />
          </div>

          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="impuesto">
              Impuesto
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
              id="impuesto"
              type="string"
              value={impuesto}
              onChange={(e) => setImpuesto(e.target.value)}
              placeholder="Introduce el impuesto"
              required
            />
          </div>

          {/* Campos para productos */}
          {products.map((product, index) => (
            <div key={index} className="mt-4 space-y-2">
              <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">ID del producto</label>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
                  value={product.productId}
                  onChange={(e) => handleProductChange(index, 'productId', e.target.value)}
                  placeholder="Introduce el ID del producto"
                  required
                />
              </div>

              <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">Comentarios del producto</label>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
                  value={product.productComments}
                  onChange={(e) => handleProductChange(index, 'productComments', e.target.value)}
                  placeholder="Introduce comentarios sobre el producto"
                  required
                />
              </div>

              <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">Precio del producto</label>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
                  value={product.productPrice}
                  onChange={(e) => handleProductChange(index, 'productPrice', e.target.value)}
                  placeholder="Introduce el precio del producto"
                  required
                />
              </div>
            </div>
          ))}

          <Button type="button" className="mt-4 w-full" onClick={addProduct}>
            Agregar producto
          </Button>

          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="numeroAgente">
              Número del agente
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2"
              id="numeroAgente"
              type="text"
              value={numeroAgente}
              onChange={(e) => setNumeroAgente(e.target.value)}
              placeholder="Introduce el número del agente"
              required
            />
          </div>

         

          <Button className="mt-4 w-full" aria-disabled={pending}>
            Crear propuesta
          </Button>

          {/* <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default CrearPropuesta;
