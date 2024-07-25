import React from 'react';

import Card from './card';
import img1 from '/assets/card/img1.jpg';
import img2 from '/assets/card/img2.jpg';
import img3 from '/assets/card/img3.jpg';

const SubBody2 = () => {
  return (
    <div className="w-full h-[45rem]">
      <div className="flex justify-center space-x-4 mx-[2rem]">
        <Card
          imageSrc={img1}
          title="Libera professione"
          description="Lavorare in armonia, senza correre dietro a scadenze ed impegni. Raggiungere gli obiettivi senza sentire il tempo col fiato sul collo. Rimanere concentrati senza perdere il focus e non procrastinare."
          buttonText="SCOPRI CON ME"
        />
        <Card
          imageSrc={img2}
          title="Cambiamento di vita"
          description="Sei diventata mamma? Vuoi cambiare lavoro o metterti in proprio? Vuoiinstaurare nuove abitudini ma non sai come fare? Praticità ed emotività vanno gestiti insieme.

Vuoi migliorare e semplificare la gestione della casa e le attività quotidiane?"
          buttonText="PARTIAMO DA QUI"
        />
        <Card
          imageSrc={img3}
          title="INTELLIGENZA EMOTIVA"
          description="La gestione di un’azienda ha a che fare con tante variabili. Tempo, flussi di lavoro, dipendenti, progetti, commesse, clienti, fornitori.

Vuoi imparare a gestire il tuo tempo diminuendo le distrazioni e semplificando la gestione delle attività quotidiane? Senza ansia e stress per creare un ambiente di lavoro più produttivo per te e le persone che lavorano con te e per te."
          buttonText="CREIAMO INSIEME"
        />
      </div>
    </div>
  );
};

export default SubBody2;
