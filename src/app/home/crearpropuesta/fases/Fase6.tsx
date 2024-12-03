import React, { FC, useEffect, useState } from 'react';
import Fase6Descuento from './Fase6-descuento';
import Fase6Impuesto from './Fase6Impuesto';

interface Fase6Props {
  setFase: (fase: number) => void;
  descuentoFinal: number;
  setDescuentoFinal: React.Dispatch<React.SetStateAction<number>>;
  precioTotal: number;
  precioFinal: number;
  setPrecioFinal: React.Dispatch<React.SetStateAction<number>>;
}

const Fase6: FC<Fase6Props> = ({ setFase, descuentoFinal, setDescuentoFinal, precioTotal, precioFinal, setPrecioFinal }) => {
  const [isDiscountSelected, setIsDiscountSelected] = useState(false)
  const [isImpuestoSelected, setIsImpuestoSelected] = useState(false)
  const [descuentoTipo, setDescuentoTipo] = useState('%')


  useEffect(() => {
    if (isDiscountSelected == false) {
      setDescuentoFinal(0) //esto es lo que cambia
      if (isImpuestoSelected == false) {
        setPrecioFinal(precioTotal - descuentoFinal)
      }
      if (isImpuestoSelected == true) { setPrecioFinal((precioTotal - descuentoFinal) * (1.21)) }
    } else {
      if (isImpuestoSelected == false) {
        setPrecioFinal(precioTotal - descuentoFinal)
      }
      if (isImpuestoSelected == true) { setPrecioFinal((precioTotal - descuentoFinal) * (1.21)) }
    }
  }, [precioTotal, descuentoFinal, isDiscountSelected, descuentoTipo, isImpuestoSelected]);

  const handleUnselect = (element: string, state: boolean) => {
    if (element == 'descuento') {
      if (state == true) {
        setIsDiscountSelected(true)
      } else {
        setDescuentoFinal(0)
        setIsDiscountSelected(false)
      }
    }
    if (element == 'impuesto') {
      if (state == true) {
        setIsImpuestoSelected(true)
      } else {
        setIsImpuestoSelected(false)
      }
    }
  }
  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
  };

  return (
    <div className="flex flex-col my-24">
      {/* Precio Total */}
      <h2 className="text-xl font-bold">Precio Total: €{precioTotal.toFixed(2)}</h2>

      {/* Descuento */}
      <div className="flex flex-col mt-4 text-gray-500">
        <div className='flex flex-row items-center'>
          <p className='text-white'>Aplicar un descuento general?</p>
          {isDiscountSelected &&
            <>
              <button className='px-2 rounded px-2 bg-gray-100 w-10 h-5 text-xs text-gray-700 ml-8'
                onClick={() => { handleUnselect('descuento', true) }}>Sí</button>
              <button className='px-2 rounded px-2 bg-gray-400 w-10 h-5 text-xs text-gray-700 ml-1'
                onClick={() => { handleUnselect('descuento', false) }}>No</button>
            </>
          }
          {!isDiscountSelected &&
            <>
              <button className='px-2 rounded px-2 bg-gray-400 w-10 h-5 text-xs text-gray-700 ml-8'
                onClick={() => { handleUnselect('descuento', true) }}>Sí</button>
              <button className='px-2 rounded px-2 bg-gray-100 w-10 h-5 text-xs text-gray-700 ml-1'
                onClick={() => { handleUnselect('descuento', false) }}>No</button>
            </>}
        </div>

        {isDiscountSelected &&
          <Fase6Descuento descuentoFinal={descuentoFinal} setDescuentoFinal={setDescuentoFinal} precioTotal={precioTotal}
            descuentoTipo={descuentoTipo} setDescuentoTipo={setDescuentoTipo} />
        }
      </div>

      {/* Impuesto */}
      <div className="flex flex-col mt-4 text-gray-500">
        <div className='flex flex-row items-center'>
          <p className='text-white'>Aplicar un impuesto?</p>
          {isImpuestoSelected &&
            <>
              <button className='px-2 rounded px-2 bg-gray-100 w-10 h-5 text-xs text-gray-700 ml-8'
                onClick={() => handleUnselect('impuesto', true)}>Sí</button>
              <button className='px-2 rounded px-2 bg-gray-400 w-10 h-5 text-xs text-gray-700 ml-1'
                onClick={() => handleUnselect('impuesto', false)}>No</button>
            </>}
          {!isImpuestoSelected &&
            <>
              <button className='px-2 rounded px-2 bg-gray-400 w-10 h-5 text-xs text-gray-700 ml-8'
                onClick={() => handleUnselect('impuesto', true)}>Sí</button>
              <button className='px-2 rounded px-2 bg-gray-100 w-10 h-5 text-xs text-gray-700 ml-1'
                onClick={() => handleUnselect('impuesto', false)}>No</button>
            </>}
        </div>

        {isImpuestoSelected &&
          <Fase6Impuesto precioTotal={precioTotal} />
        }
      </div>

      {/* Precio Final */}
      <div className="text-4xl font-bold mt-6 text-center">
        Precio Final : €{precioFinal.toFixed(2)}
        {isImpuestoSelected && <span className='text-xs mx-2'>(iva incluido)</span>}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => handleFaseChange(7)}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Continuar
        </button>
      </div>
    </div>

  );
};

export default Fase6;
