import React, { useEffect } from 'react';
import ImageMain from '../../public/assets/ImageMain.png';
import ImageRagazza from '../../public/assets/ImageRagazza.png';
import SubBody1 from './SubBody1/SubBody1';

const Body = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <div className="w-full max-h-[35rem] flex-grow overflow-y-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ImageMain})`, height: '150vh' }}>
        {/* Puoi aggiungere il contenuto del corpo qui */}
        <div className="relative p-8 text-white w-100% flex">
          <img src={ImageRagazza} alt="Main" className="h-[33rem] object-cover ml-[10%]" />
          <div className="bg-transparent ml-[3rem] w-[33rem] flex items-center justify-center p-4">
            <p className="text-black text-[3rem]" style={{ fontFamily: "'Dancing Script', cursive" }}>
              La Business Coach pronta a far sbocciare il tuo potenziale in modo etico, inclusivo e sostenibile
            </p>
          </div>
        </div>
      </div>
      <SubBody1 />
    </>
  );
};

export default Body;
