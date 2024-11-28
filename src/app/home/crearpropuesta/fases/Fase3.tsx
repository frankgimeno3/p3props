import React, { FC } from 'react';

interface Fase3Props {
    setFase: (fase: number) => void;
    lang: string;
    setLang: (lang: string) => void;
    setIsExchange: (isExchange: boolean) => void;
}

const Fase3: FC<Fase3Props> = ({ setFase, setLang, setIsExchange }) => {
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(event.target.value);  
    };

    const handleExchangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsExchange(event.target.value === "true");  
    };

     const handleFaseChange = (nextfase: number) => {
        setFase(nextfase);
       };
    return (
        <div className='flex flex-col'>
            <label>
                <p>Selecciona el idioma de la propuesta</p>
                <select onChange={handleLanguageChange}>
                    <option value="en">Inglés</option>
                    <option value="es">Castellano</option>
                </select>
            </label>
            <label>
                <p>¿Es esta oferta un intercambio?</p>
                <select onChange={handleExchangeOption}>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                </select>
            </label>
             <button type="button" onClick={()=>{handleFaseChange(4)}}>Continuar</button>

        </div>
    );
};

export default Fase3;
