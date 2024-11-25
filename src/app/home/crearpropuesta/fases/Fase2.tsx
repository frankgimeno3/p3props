import React, { FC, useState } from 'react';

interface Fase2Props {}

const Fase2: FC<Fase2Props> = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    crmCode: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <p>No se encontraron datos del cliente</p>
      <p>Introduzca los datos del cliente</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre empresa cliente:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CRM Code:</label>
          <input
            type="text"
            name="crmCode"
            value={formData.crmCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>País:</label>
          <input
            type="text"
            name="country"
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
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Persona de contacto:</label>
          <input
            type="text"
            name="contactPerson"
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
            value={formData.contactEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default Fase2;
