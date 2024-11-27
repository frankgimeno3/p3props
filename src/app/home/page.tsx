import React, { FC } from 'react';
import { useRouter } from "next/navigation";


interface HomeProps {

}

const Home: FC<HomeProps> = ({ }) => {
  
   const router = useRouter();
   const handleRedirection = (direction: string) => {
    router.push(direction);
  };

  return (
    <div className='p-5'>
      <p className='text-3xl'>Bienvenido, X</p>
      <p className='p-2'>Qué quieres hacer?</p>
      <div className='flex flex-row'>
        <div className='flex flex-col p-5 hover:bg-gray-100 hover:shadow' onClick={()=>{handleRedirection('/home/popuestas')}}>
          <p className='font-bold p-3'>Crear una propuesta de cero</p>
          <p>Deberás añadir primero los datos del cliente, y luego crear la propuesta</p>
        </div>
        <div className='flex flex-col p-5 hover:bg-gray-100 hover:shadow' onClick={()=>{handleRedirection('/home/crearpropuesta')}}>
          <p className='font-bold p-3'>Visualizar propuestas</p>
          <p>Mira propuestas ya creadas, y opcionalmente crea una versión de ellas</p>
        </div>
      </div>
    </div>
  );
};

export default Home;