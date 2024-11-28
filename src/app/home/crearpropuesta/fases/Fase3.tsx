import React, { FC } from 'react';

interface Fase3Props {
    setFase: (fase: number) => void;
    lang: string;
    setLang: (lang: string) => void;
    isExchange: boolean;
    setIsExchange: (isExchange: boolean) => void;
}

const Fase3: FC<Fase3Props> = ({ setFase, lang, setLang, isExchange, setIsExchange }) => {
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(event.target.value);
    };

    const handleExchangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsExchange(event.target.value === "true");
    };

    const handleFaseChange = (nextFase: number) => {
        setFase(nextFase);
    };

    const isFormValid = lang !== '' && typeof isExchange === 'boolean';

    return (
        <div className="flex flex-col">
            <label>
                <p>Selecciona el idioma de la propuesta</p>
                <select value={lang} onChange={handleLanguageChange}>
                    <option value="en">Inglés</option>
                    <option value="es">Castellano</option>
                </select>
            </label>
            <label>
                <p>¿Es esta oferta un intercambio?</p>
                <select value={isExchange.toString()} onChange={handleExchangeOption}>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                </select>
            </label>
            <button
                type="button"
                onClick={() => handleFaseChange(4)}
                className={`h-9 w-36 rounded-lg text-sm ${
                    isFormValid
                        ? 'bg-gray-300 text-gray-800'
                        : 'bg-gray-500 text-gray-800'
                }`}
                disabled={!isFormValid}
            >
                Continuar
            </button>
        </div>
    );
};

export default Fase3;
