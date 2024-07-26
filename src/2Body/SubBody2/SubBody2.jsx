import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import EditableText from '../../components/editableText';
import { LoginContext } from '../../context/loginContext';
import Card from './card';
import img1 from '/assets/card/img1.jpg';
import img2 from '/assets/card/img2.jpg';
import img3 from '/assets/card/img3.jpg';

const SubBody2 = () => {
  const { isLoggedIn } = useContext(LoginContext); // Ottieni lo stato di login
  const [description1, setDescription1] = useState(
    'Lavorare in armonia, senza correre dietro a scadenze ed impegni. Raggiungere gli obiettivi senza sentire il tempo col fiato sul collo. Rimanere concentrati senza perdere il focus e non procrastinare.',
  );
  const [description2, setDescription2] = useState(
    'Sei diventata mamma? Vuoi cambiare lavoro o metterti in proprio? Vuoi instaurare nuove abitudini ma non sai come fare? Praticità ed emotività vanno gestiti insieme. Vuoi migliorare e semplificare la gestione della casa e le attività quotidiane?',
  );
  const [description3, setDescription3] = useState(
    'La gestione di un’azienda ha a che fare con tante variabili. Tempo, flussi di lavoro, dipendenti, progetti, commesse, clienti, fornitori. Vuoi imparare a gestire il tuo tempo diminuendo le distrazioni e semplificando la gestione delle attività quotidiane? Senza ansia e stress per creare un ambiente di lavoro più produttivo per te e le persone che lavorano con te e per te.',
  );

  useEffect(() => {
    // Fetch the text descriptions from the server
    axios
      .get('http://localhost:3001/api/text/description1')
      .then((response) => setDescription1(response.data.content || description1))
      .catch((error) => console.error('Errore nel caricamento del testo descrittivo 1', error));

    axios
      .get('http://localhost:3001/api/text/description2')
      .then((response) => setDescription2(response.data.content || description2))
      .catch((error) => console.error('Errore nel caricamento del testo descrittivo 2', error));

    axios
      .get('http://localhost:3001/api/text/description3')
      .then((response) => setDescription3(response.data.content || description3))
      .catch((error) => console.error('Errore nel caricamento del testo descrittivo 3', error));
  }, [description1, description2, description3]);

  const handleSaveDescription1 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description1', { content: newText })
      .then((response) => setDescription1(response.data.content))
      .catch((error) => console.error('Errore nel salvataggio del testo descrittivo 1', error));
  };

  const handleSaveDescription2 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description2', { content: newText })
      .then((response) => setDescription2(response.data.content))
      .catch((error) => console.error('Errore nel salvataggio del testo descrittivo 2', error));
  };

  const handleSaveDescription3 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description3', { content: newText })
      .then((response) => setDescription3(response.data.content))
      .catch((error) => console.error('Errore nel salvataggio del testo descrittivo 3', error));
  };

  return (
    <div className="w-full h-[45rem]">
      <div className="flex justify-center space-x-4 mx-[2rem]">
        <Card imageSrc={img1} title="Libera professione" description={isLoggedIn ? <EditableText text={description1} onSave={handleSaveDescription1} className="text-md" /> : description1} buttonText="SCOPRI CON ME" />
        <Card imageSrc={img2} title="Cambiamento di vita" description={isLoggedIn ? <EditableText text={description2} onSave={handleSaveDescription2} className="text-md" /> : description2} buttonText="PARTIAMO DA QUI" />
        <Card imageSrc={img3} title="INTELLIGENZA EMOTIVA" description={isLoggedIn ? <EditableText text={description3} onSave={handleSaveDescription3} className="text-md" /> : description3} buttonText="CREIAMO INSIEME" />
      </div>
    </div>
  );
};

export default SubBody2;
