import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditableText from '../../components/editableText';
import ImageSub1Logo from '/assets/ImageSbu1Logo.png';

const SubBody1 = () => {
  const [welcomeText, setWelcomeText] = useState('Welcome!');
  const [description1, setDescription1] = useState('Sono Lara, <strong>Business Coach, Consulente di Carriera, Formatrice e Assessor in Intelligenza Emotiva</strong>, specializzata in empowerment individuale, femminile e organizzativo.');
  const [description2, setDescription2] = useState('Nel mio ruolo di Business Coach professionista, sono qui per aiutarti a liberare il tuo potenziale attraverso percorsi di trasformazione su misura.');
  const [description3, setDescription3] = useState(
    'Mi occupo di gestione del tempo, mi piace definirmi un’allenatrice dell’organizzazione. Work&life balance per me è uno stile di vita e aiuto liberi professionisti e aziende a beneficiarne. Sei multipotenziale? Ti annoi a fare una cosa sola per volta, hai tante passioni e non vuoi rinunciare a nessuna? Sappi che non devi farlo, anche io sono come te e ti capisco. Ho acquisito le tecniche per gestire al meglio ciò che inizialmente sembrava caos, ma ora è luce.',
  );

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Fetch the welcome text from the server
    axios
      .get('http://localhost:3001/api/text/welcomeText')
      .then((response) => {
        setWelcomeText(response.data.content || welcomeText);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del testo di benvenuto', error);
      });

    // Fetch description1 text from the server
    axios
      .get('http://localhost:3001/api/text/description1')
      .then((response) => {
        setDescription1(response.data.content || description1);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del testo descrittivo 1', error);
      });

    // Fetch description2 text from the server
    axios
      .get('http://localhost:3001/api/text/description2')
      .then((response) => {
        setDescription2(response.data.content || description2);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del testo descrittivo 2', error);
      });

    // Fetch description3 text from the server
    axios
      .get('http://localhost:3001/api/text/description3')
      .then((response) => {
        setDescription3(response.data.content || description3);
      })
      .catch((error) => {
        console.error('Errore nel caricamento del testo descrittivo 3', error);
      });
  }, [description1, description2, description3, welcomeText]);

  const handleSaveWelcomeText = (newText) => {
    axios
      .post('http://localhost:3001/api/text/welcomeText', { content: newText })
      .then((response) => {
        setWelcomeText(response.data.content);
      })
      .catch((error) => {
        console.error('Errore nel salvataggio del testo di benvenuto', error);
      });
  };

  const handleSaveDescription1 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description1', { content: newText })
      .then((response) => {
        setDescription1(response.data.content);
      })
      .catch((error) => {
        console.error('Errore nel salvataggio del testo descrittivo 1', error);
      });
  };

  const handleSaveDescription2 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description2', { content: newText })
      .then((response) => {
        setDescription2(response.data.content);
      })
      .catch((error) => {
        console.error('Errore nel salvataggio del testo descrittivo 2', error);
      });
  };

  const handleSaveDescription3 = (newText) => {
    axios
      .post('http://localhost:3001/api/text/description3', { content: newText })
      .then((response) => {
        setDescription3(response.data.content);
      })
      .catch((error) => {
        console.error('Errore nel salvataggio del testo descrittivo 3', error);
      });
  };

  return (
    <div className="w-full h-[35rem] bg-white">
      <div className="flex flex-wrap my-[4rem]">
        {/* //1 */}
        <div className="lg:w-[50%] md:w-[50%] md:mr-[5%] sm:mr-[10%] mr-[10%] ml-[2rem] bg-white rounded-lg justify-between ">
          <div className="pb-4">
            <EditableText className="text-4xl md:text-5xl font-bold text-pink-800 italic" style={{ fontFamily: "'Dancing Script', cursive" }} text={welcomeText} onSave={handleSaveWelcomeText} />
            <EditableText className="mb-4 text-justify text-md" text={description1} onSave={handleSaveDescription1} />
            <EditableText className="mb-4 text-justify text-md" text={description2} onSave={handleSaveDescription2} />
            <EditableText className="mb-4 text-justify" text={description3} onSave={handleSaveDescription3} />
          </div>
        </div>
        {/* //2 */}
        <div className="w-[35%] items-center justify-center ml-auto md:ml-[-3rem] mr-[1rem] md:block sm:hidden hidden">
          <img src={ImageSub1Logo} alt="Main" className="min-w-[500px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SubBody1;
