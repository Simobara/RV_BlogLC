import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import EditableText from '../../components/editableText'; // Importa EditableText
import { LoginContext } from '../../context/loginContext';
import Card from './card';
import './SubBody3.css';
import img1 from '/assets/card2/img1.png';
import img2 from '/assets/card2/img2.png';
import img3 from '/assets/card2/img3.png';
import img4 from '/assets/card2/img4.png';
import img5 from '/assets/card2/img5.png';

const SubBody3 = () => {
  const { isLoggedIn } = useContext(LoginContext); // Ottieni lo stato di login
  const [description1, setDescription1] = useState('TI AIUTO A RAFFORZARE LA TUA AUTOSTIMA');
  const [description2, setDescription2] = useState("TI AIUTO A SVILUPPARE CAPACITA' DI ASCOLTO E DI COMUNICAZIONE EFFICACE");
  const [description3, setDescription3] = useState('TI INCORAGGIO AD ADOTTARAE NUOVE VISIONI');
  const [description4, setDescription4] = useState("TI FORNISCO GLI STRUMENTI PER GESTIRE LE TUE EMOZIONI CON CONSAPEVOLEZZA E INTENZIONALITA'");
  const [description5, setDescription5] = useState('TI AIUTO A SVILUPPARE LE TUE COMPETENZE DI INTELLIGENZA EMOTIVA E DI LEADERSHIP');

  useEffect(() => {
    const link1 = document.createElement('link');
    const link2 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link2.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link1.rel = 'stylesheet';
    link2.rel = 'stylesheet';
    document.head.appendChild(link1);
    document.head.appendChild(link2);

    /// --- --- ---
    /// --- --- ---
    /// --- --- ---
    /// --- --- ---
    /// --- --- ---

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

    axios
      .get('http://localhost:3001/api/text/description4')
      .then((response) => setDescription4(response.data.content || description4))
      .catch((error) => console.error('Errore nel caricamento del testo descrittivo 4', error));

    axios
      .get('http://localhost:3001/api/text/description5')
      .then((response) => setDescription5(response.data.content || description5))
      .catch((error) => console.error('Errore nel caricamento del testo descrittivo 5', error));
  }, [description1, description2, description3, description4, description5]);
  // --- --- ---
  // --- --- ---
  // --- --- ---
  // --- --- ---
  // --- --- ---
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

  const handleSaveDescription4 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description4', { content: newText })
      .then((response) => setDescription4(response.data.content))
      .catch((error) => console.error('Errore nel salvataggio del testo descrittivo 4', error));
  };

  const handleSaveDescription5 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description5', { content: newText })
      .then((response) => setDescription5(response.data.content))
      .catch((error) => console.error('Errore nel salvataggio del testo descrittivo 5', error));
  };

  /// --- --- ---
  /// --- --- ---
  /// --- --- ---
  /// --- --- ---
  /// --- --- ---
  
  return (
    <div className="relative bg-white text-black w-full h-[50rem] flex flex-col items-center justify-start pt-4 mt-[4rem]">
      <div className="text-[2rem] font-bold text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        COME PUO&apos; AIUTARTI UNA BUSINESS COACH
      </div>
      <h1 className="absolute mt-[2rem] text-5xl font-bold text-pink-800 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Ecco come posso supportarti io !
      </h1>

      <div className="flex mt-[4rem] mx-[2rem] space-x-4">
        <Card imageSrc={img1} description={isLoggedIn ? <EditableText text={description1} onSave={handleSaveDescription1} className="text-md" /> : description1} />
        <Card imageSrc={img2} description={isLoggedIn ? <EditableText text={description2} onSave={handleSaveDescription2} className="text-md" /> : description2} />
        <Card imageSrc={img3} description={isLoggedIn ? <EditableText text={description3} onSave={handleSaveDescription3} className="text-md" /> : description3} />
        <Card imageSrc={img4} description={isLoggedIn ? <EditableText text={description4} onSave={handleSaveDescription4} className="text-md" /> : description4} />
        <Card imageSrc={img5} description={isLoggedIn ? <EditableText text={description5} onSave={handleSaveDescription5} className="text-md" /> : description5} />
      </div>

      <div className="bg-pink-900 mt-8 p-8 text-3xl font-bold rounded-lg relative flex items-center text-white justify-center mx-[4rem] mb-[40%] custom-shadow" style={{ fontFamily: "'Dancing Script', cursive" }}>
        <span className="text-6xl absolute top-0 left-0 transform -translate-y-6 -translate-x-6 text-black">&ldquo;</span>
        <p className="text-center">
          <span className="text-white">Procastinare</span> è l&apos;arte di stare al passo con ciò che è successo ieri, per evitare il domani
          <br />
          <span className="text-lg mt-4 block text-right text-green-500">- Wayne Dyer -</span>
        </p>
        <span className="text-6xl absolute bottom-0 right-0 transform translate-y-6 translate-x-6 text-black">&rdquo;</span>
      </div>
    </div>
  );
};

export default SubBody3;
