import React, { FC } from 'react';

interface FasesNavProps {
    fase:number;
    
    setFase: (fase: number) => void;
}

const FasesNav: FC<FasesNavProps> = ({fase, setFase}) => {
    const handleFaseBack = ()=> {
        if (fase > 1 ) {setFase(fase-1)}
        else {setFase(1)}
    }
  return (
    <div className='flex flex-row bg-black text-gray-400  border-b border-gray-600 justify-between items-center p-5 '  style={{ backgroundColor: "#0f0f10" }}>
        <p>Creador de propuestas</p>
        <button onClick={()=>handleFaseBack()}
                 className=' h-9 ml-5 w-24 rounded-lg text-sm bg-gray-300 text-gray-800 hover:bg-gray-300'
          >Atrás</button>
    </div>
  );
};

export default FasesNav;