import React, { useEffect } from 'react';
import Cred1 from '/assets/cred/cred1.png';
import Cred2 from '/assets/cred/cred2.jpg';
import Cred3 from '/assets/cred/cred3.png';
import ImageRagazza from '/assets/ImageRagazza0.jpg';

const SubBody4 = () => {
  useEffect(() => {
    const link1 = document.createElement('link');
    const link2 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link2.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link1.rel = 'stylesheet';
    link2.rel = 'stylesheet';
    document.head.appendChild(link1);
    document.head.appendChild(link2);
  }, []);

  return (
    <div className="relative bg-white text-black w-full h-[50rem] flex flex-col items-center justify-start pt-4 mt-[4rem]">
      <div className="text-[2rem] font-bold text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        LE MIE CREDENZIALI DI BUSINESS COACH
      </div>
      <h1 className="absolute mt-[2rem] text-4xl font-bold text-pink-800 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Garanzia di qualita&apos; e professionalita&apos;
      </h1>

      <div className="flex items-center justify-center mt-[4rem] mx-[2rem] md:mx-[8rem] space-x-4 ">
        <div className="flex flex-col justify-center w-[30%] min-h-[250px] mr-[4rem]">
          <p className="text-justify">
            Ti assicuro un servizio conforme agli elevati standard di qualita&apos; ed etica. Le mie credenziali garantiscono un approccio professionale e competente al coaching, ponendo al centro dell&apos; attenzione il tuo benessere e la tua
            crescita personale e professionale. Le mie qualifiche sono la tua garanzia di un percorso di <strong>coaching efficace e trasformativo.</strong>
          </p>
        </div>
        <img src={ImageRagazza} alt="ImgLara2" className="w-[250px] h-auto" />
      </div>

      <div className="flex justify-center items-center mt-8 ">
        <img src={Cred1} alt="Image1" className="w-[150px] h-[120px] mr-[10%]" />
        <img src={Cred2} alt="Image2" className="w-[150px] h-[120px] mr-[10%]" />
        <img src={Cred3} alt="Image2" className="w-[150px] h-[120px]" />
      </div>
    </div>
  );
};

export default SubBody4;
