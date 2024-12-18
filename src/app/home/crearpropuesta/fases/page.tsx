"use client";
import React, { FC, useState } from 'react';
import { addPropuesta, Product } from '@/lib/propuestas/addPropuesta';
import { useFormStatus } from 'react-dom';
// import { Button } from '@/app/auth/signup/button';
import Fase1 from './Fase1';
import Fase2 from './Fase2';
import Fase3 from './Fase3';
import Fase4 from './Fase4';
import Fase5 from './Fase5';
import Fase6 from './Fase6';
import Fase7 from './Fase7';
import FasesNav from './fasesNav';

interface CrearPropuestaProps {}

const CrearPropuesta: FC<CrearPropuestaProps> = ({}) => {
    const { pending } = useFormStatus();

    const [fase, setFase] = useState(1);
    const [lang, setLang] = useState("es");
    const [companyName, setCompanyName] = useState("");
    const [isExchange, setIsExchange] = useState(false);
    const [clientId, setClientId] = useState("");
    const [descuentoFinal, setDescuentoFinal] = useState(0);
    const [impuesto, setImpuesto] = useState("");
    const [numeroAgente, setNumeroAgente] = useState("");
    const [itemsArray, setItemsArray] = useState<string[]>([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [precioFinal, setPrecioFinal] = useState(0);

    // Nuevo estado para conceptos
    const [conceptos, setConceptos] = useState<{ concepto: string; precioTarifa: number; descuento: number; precioUnitario: number }[]>([]);

    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = () => {
        setProducts([
            ...products,
            { productId: '', productComments: '', productPrice: '' }
        ]);
    };

    const handleProductChange = (index: number, field: keyof Product, value: string) => {
        const updatedProducts = [...products];
        updatedProducts[index] = { ...updatedProducts[index], [field]: value };
        setProducts(updatedProducts);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await addPropuesta(lang, clientId, products, descuentoFinal, impuesto, numeroAgente);
        } catch (error) {
            console.error("Error al crear la propuesta:", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#0f0f10" }}>
            <FasesNav fase={fase} setFase={setFase} />
            <div className="px-44">
                {fase == 1 && <Fase1 setFase={setFase} clientId={clientId} setClientId={setClientId} />}
                {fase == 2 && <Fase2 setFase={setFase} clientId={clientId} setCompanyName={setCompanyName} />}
                {fase == 3 && (
                    <Fase3
                        setFase={setFase}
                        lang={lang}
                        setLang={setLang}
                        isExchange={isExchange}
                        setIsExchange={setIsExchange}
                        companyName={companyName}
                    />
                )}
                {fase == 4 && <Fase4 setFase={setFase} itemsArray={itemsArray} setItemsArray={setItemsArray} />}
                {fase == 5 && (
                    <Fase5
                        setFase={setFase}
                        isExchange={isExchange}
                        itemsArray={itemsArray}
                        setItemsArray={setItemsArray}
                        precioTotal={precioTotal}
                        setPrecioTotal={setPrecioTotal}
                        conceptos={conceptos} // Pasamos conceptos como prop
                        setConceptos={setConceptos} // Pasamos setConceptos como prop
                    />
                )}
                {fase == 6 && (
                    <Fase6
                        setFase={setFase}
                        descuentoFinal={descuentoFinal}
                        setDescuentoFinal={setDescuentoFinal}
                        precioTotal={precioTotal}
                        precioFinal={precioFinal}
                        setPrecioFinal={setPrecioFinal}
                    />
                )}
                {fase == 7 && <Fase7 />}
            </div>
        </div>
    );
};

export default CrearPropuesta;
