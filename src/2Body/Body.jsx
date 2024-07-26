import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditableText from '../components/editableText';
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
  const [mainText, setMainText] = useState('La Business Coach pronta a far sbocciare il tuo potenziale in modo etico, inclusivo e sostenibile');
  const [anotherText, setAnotherText] = useState('Un altro testo modificabile');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Fetch the main text from the server
    axios
      .get('http://localhost:3001/api/text/mainText')
      .then((response) => {
        setMainText(response.data.content || mainText);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del testo principale', error);
      });

    // Fetch another text from the server
    axios
      .get('http://localhost:3001/api/text/anotherText')
      .then((response) => {
        setAnotherText(response.data.content || anotherText);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dell'altro testo", error);
      });
  }, [anotherText, mainText]);

  const handleSaveMainText = (newText) => {
    axios
      .post('http://localhost:3001/api/text/mainText', { content: newText })
      .then((response) => {
        setMainText(response.data.content);
      })
      .catch((error) => {
        console.error('Errore nel salvataggio del testo principale', error);
      });
  };

  // const handleSaveAnotherText = (newText) => {
  //   axios
  //     .post('http://localhost:3001/api/text/anotherText', { content: newText })
  //     .then((response) => {
  //       setAnotherText(response.data.content);
  //     })
  //     .catch((error) => {
  //       console.error("Errore nel salvataggio dell'altro testo", error);
  //     });
  // };

  return (
    <>
      <div id="top" className="relative">
        <div className="w-full max-h-[35rem] flex-grow overflow-y-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ImageMain})`, height: '150vh' }}>
          <div className="relative p-8 text-white w-100% flex">
            <img src={ImageRagazza} alt="Main" className="sm:h-[25rem] md:h-[25rem] md:ml-[-1rem] lg:h-[30rem] ml-[-1rem] h-[20rem] object-cover" />
            <div className="bg-transparent ml-[3rem] w-[50%] flex items-center justify-center p-4">
              <EditableText
                className="text-black text-[2rem] sm:text-[2rem] sm:ml-[-3rem] md:text-[2rem] md:ml-[0.7rem] lg:text-[3rem] ml-[-3rem] xs:hidden"
                style={{ fontFamily: "'Dancing Script', cursive" }}
                text={mainText}
                onSave={handleSaveMainText}
              />
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
        <div id="subbody4">
          <SubBody4 />
        </div>
        <div id="contatti">
          <Contatti />
        </div>
        <div className="fixed top-[75%] right-[8px] w-[8rem] lens-shadow" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <a href="https://wa.me/00393407633065" target="_blank" rel="noopener noreferrer">
            <img src={hovered ? ImgWApp2 : ImgWApp} alt="WApp" className={`h-[9rem] object-cover rounded-full transition-transform duration-[1500ms] ease-out transform ${hovered ? '' : 'scale-100'}`} />
          </a>
        </div>
      </div>
      {/* <div className="relative p-8 text-white w-100% flex">
        <EditableText className="text-black text-[2rem]" style={{ fontFamily: "'Dancing Script', cursive" }} text={anotherText} onSave={handleSaveAnotherText} />
      </div> */}
    </>
  );
};

export default Body;
