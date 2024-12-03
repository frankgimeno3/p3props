import React, { FC } from 'react';

interface Fase3Props {
    setFase: (fase: number) => void;
    lang: string;
    setLang: (lang: string) => void;
    isExchange: boolean;
    setIsExchange: (isExchange: boolean) => void;
    companyName: string;
}

const Fase3: FC<Fase3Props> = ({ setFase, lang, setLang, isExchange, setIsExchange, companyName }) => {
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
        <div className="flex flex-col my-24">
            <div className='flex flex-col mt-6 mx-auto '>
                <label className='my-2 flex flex-col' style={{ width: "1000px" }}>
                    <p className="text-xl pt-5 pb-2 ">
                        Idioma de la propuesta</p>
                    <select value={lang} onChange={handleLanguageChange}
                        className="w-full pl-3 py-2 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500">
                        <option value="en" className='text-gray-600'>Inglés</option>
                        <option value="es" className='text-gray-600'>Castellano</option>
                    </select>
                </label>
                <label className='my-2 flex flex-col py-6' style={{ width: "1000px" }}>
                <p className="text-xl pt-5 pb-2 ">
                ¿Es un intercambio?</p>
                    <select value={isExchange.toString()} onChange={handleExchangeOption}
                        className="w-full pl-3 py-2 rounded bg-transparent hover:bg-white hover:bg-opacity-5 border border-gray-500">
                        <option value="true" className='text-gray-600'>Sí</option>
                        <option value="false" className='text-gray-600'>No</option>
                    </select>
                </label>
            </div>

            <div className='text-center pt-5'>
                <button
                    type="submit"
                    onClick={() => { handleFaseChange(4) }}
                    className={`h-9   w-36 rounded-lg text-sm ${isFormValid ? 'bg-gray-300 text-gray-800' : 'bg-gray-500 text-gray-800'}`}
                    disabled={!isFormValid}
                >
                    Continuar
                </button>

            </div>
        </div>
    );
};

export default Fase3;
