import React, { useEffect } from 'react';

const SubBody4 = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative bg-white text-black w-full h-[25rem] flex flex-col items-center justify-start pt-4 mt-[4rem]">
      <div className="text-[2rem] font-bold text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        LE MIE CREDENZIALI DI BUSINESS COACH
      </div>
      <h1 className="absolute mt-[2rem] text-4xl font-bold text-pink-800 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Garanzia di qualita&apos; e professionalita&apos;
      </h1>

      <div className="relative flex mt-[4rem] items-center justify-center">
        <p className="absolute mt-[4rem] text-justify w-[60rem] mx-[2rem]">
          Ti assicuro un servizio conforme agli elevati standard di qualita&apos; ed etica. Le mie credenziali garantiscono un approccio professionale e competente al coaching, ponendo al centro dell&apos; attenzione il tuo benessere e la tua
          crescita personale e professionale. Le mie qualifiche sono la tua garanzia di un percorso di <strong>coaching efficace e trasformativo.</strong>
        </p>
      </div>
    </div>
  );
};

export default SubBody4;
