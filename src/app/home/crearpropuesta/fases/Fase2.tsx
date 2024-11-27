import React, { FC, useState } from 'react';

interface Fase2Props {
  setFase: (fase: number) => void;
  clientId: string;
}

const Fase2: FC<Fase2Props> = ({ setFase, clientId }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    clientId: clientId,
    phone: '',
    country: '',
    address: '',
    postalCode: '',
    city: '',
    contactPerson: '',
    contactEmail: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFaseChange = (nextfase: number) => {
    setFase(nextfase);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  // Verificar si todos los campos tienen contenido
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  return (
    <div className='flex flex-col'>
      <p className='italic py-12 text-center'>No se encontraron datos para el cliente con el código {clientId}</p>
      <p className="text-2xl pb-5">Introduzca manualmente los datos del cliente <span className='pl-4 text-sm text-gray-400 font-light'>(se guardarán para futuras propuestas)</span></p>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row'>
          <div className='flex flex-1 flex-col  pr-5'>
            <div className='flex flex-col'>
              <label>Nombre empresa cliente:</label>
              <input
                type="text"
                name="companyName"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                type="text"
                name="phone"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Persona de contacto:</label>
              <input
                type="text"
                name="contactPerson"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email persona de contacto:</label>
              <input
                type="email"
                name="contactEmail"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.contactEmail}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className='flex flex-1 flex-col ml-5'>
            <div>
              <label>País:</label>
              <input
                type="text"
                name="country"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Dirección:</label>
              <input
                type="text"
                name="address"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Código Postal:</label>
              <input
                type="text"
                name="postalCode"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Ciudad:</label>
              <input
                type="text"
                name="city"
                className="w-full pl-3 py-2 mb-4 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Botón Continuar */}
        <div className='text-center pt-5'>
        <button
          type="submit"
          onClick={() => { handleFaseChange(2) }}
          className={`h-9   w-36 rounded-lg text-sm ${isFormValid ? 'bg-gray-300 text-gray-800' : 'bg-gray-500 text-gray-800'}`}
          disabled={!isFormValid}
        >
          Continuar
        </button>

        </div>
      </form>
    </div>
  );
};

export default Fase2;
