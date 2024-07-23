import React from 'react';

import Card from './card';
import img1 from '/assets/card/img1.png';
import img2 from '/assets/card/img2.png';
import img3 from '/assets/card/img3.png';

const SubBody2 = () => {
  return (
    <div className="w-full h-[40rem] overflow-hidden">
      <div className="flex justify-center space-x-4 mx-[2rem]">
        <Card imageSrc={img1} title="COACHING DI CARRIERA PER DONNE" description="Per dare una svolta alla tua carriera e raggiungere obiettivi professionali ambiziosi." buttonText="SCOPRI DI PIÙ" />
        <Card imageSrc={img2} title="COACHING PER LEADER, TEAM & GRUPPI" description="Per potenziare il tuo team, coltivare la leadership e ottenere risultati eccellenti in maniera equa e sostenibile." buttonText="SCOPRI DI PIÙ" />
        <Card imageSrc={img3} title="ASSESSMENT DI INTELLIGENZA EMOTIVA" description="Per valutare le competenze, i fattori di successo e le performance di leader team e organizzazioni." buttonText="SCOPRI DI PIÙ" />
      </div>
    </div>
  );
};

export default SubBody2;
