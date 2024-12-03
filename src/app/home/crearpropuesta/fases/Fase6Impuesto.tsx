import React, { FC, useState } from 'react';

interface Fase6ImpuestoProps {
    precioTotal:number
     
}

const Fase6Impuesto: FC<Fase6ImpuestoProps> = ({precioTotal }) => {
  const [impuestoCalculado, setImpuestoCalculado] = useState(0)

    const calcularImpuesto = () => {
        return precioTotal * 0.21;
      };
  return (
    <div className="flex items-center space-x-4 mt-4">

    <label className="text-lg">IVA (21%):</label>
    <div className="ml-4 text-lg font-semibold">
      €{calcularImpuesto().toFixed(2)}
    </div>
  </div>  );
};

export default Fase6Impuesto;