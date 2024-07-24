import React, { useEffect, useState } from 'react';
import './Body.css';
import Contatti from './External/Contatti/contatti';
import SubBody1 from './SubBody1/SubBody1';
import SubBody2 from './SubBody2/SubBody2';
import SubBody3 from './SubBody3/SubBody3';
import SubBody4 from './SubBody4/SubBody4';
import ImageMain from '/assets/ImageMain.png';
import ImageRagazza from '/assets/ImageRagazza.png';
import ImgWApp from '/assets/Wapp/ImgWApp.png';
import ImgWApp2 from '/assets/Wapp/ImgWApp2.png';

const Body = () => {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <div id="top" className="relative">
        <div className=" w-full max-h-[35rem] flex-grow overflow-y-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ImageMain})`, height: '150vh' }}>
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
        <div id="subbody1">
          <SubBody1 />
        </div>
        <div id="subbody2">
          <SubBody2 />
        </div>
        <div id="subbody3">
          <SubBody3 />
        </div>
        <SubBody4 />
        <div id="contatti">
          <Contatti />
        </div>
        <div className="fixed top-[75%] right-[8px] w-[8rem] lens-shadow" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <a href="https://wa.me/393342325244" target="_blank" rel="noopener noreferrer">
            <img src={hovered ? ImgWApp2 : ImgWApp} alt="WApp" className={`h-[9rem] object-cover rounded-full transition-transform duration-[1500ms] ease-out transform ${hovered ? '' : 'scale-100'}`} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Body;