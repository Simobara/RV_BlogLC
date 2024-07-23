import React, { useEffect } from 'react';
import Card from './card';
import img1 from '/assets/card2/img1.png';
import img2 from '/assets/card2/img2.png';
import img3 from '/assets/card2/img3.png';
import img4 from '/assets/card2/img4.png';
import img5 from '/assets/card2/img5.png';

const SubBody3 = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative bg-gray-200 text-black w-full h-[40rem] flex flex-col items-center justify-start pt-4">
      <div className="text-[2rem] font-bold text-center">COME PUO&apos; AIUTARTI UNA BUSINESS COACH</div>
      <h1 className="absolute mt-[2rem] text-4xl md:text-5xl font-bold text-pink-800" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Ecco come posso supportarti io
      </h1>
      <div className="flex mt-[4rem] mx-[2rem] space-x-4">
        <Card imageSrc={img1} description="TI AIUTO A RAFFORZARE LA TUA AUTOSTIMA" />
        <Card imageSrc={img2} description="TI AIUTO A SVILUPPARE CAPACITA' DI ASCOLTO E DI COMUNICAZIONE EFFICACE" />
        <Card imageSrc={img3} description="TI INCORAGGIO AD ADOTTARAE NUOVE VISIONI" />
        <Card imageSrc={img4} description="TI FORNISCO GLI STRUMENTI PER GESTIRE LE TUE EMOZIONI CON CONSAPEVOLEZZA E INTENZIONALITA'" />
        <Card imageSrc={img5} description="TI AIUTO A SVILUPPARE LE TUE COMPETENZE DI INTELLIGENZA EMOTIVA E DI LEADERSHIP" />
      </div>
    </div>
  );
};

export default SubBody3;
