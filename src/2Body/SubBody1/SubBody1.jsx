import React, { useEffect } from 'react';
import ImageSub1Logo from '/assets/ImageSbu1Logo.png';

const SubBody1 = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-full h-[35rem] bg-white">
      <div className="flex flex-wrap my-[4rem]">
        {/* //1 */}
        <div className="w-[50%] ml-[2rem] bg-white rounded-lg justify-between ">
          <div className="pb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Welcome!
            </h1>
            <p className="mb-4 text-justify text-md">
              Sono Rosy, <strong>Business Coach, Career Coach, Consulente di Carriera, Formatrice e Assessor in Intelligenza Emotiva</strong>, specializzata in empowerment individuale, femminile e organizzativo.
            </p>
            <p className="mb-4 text-justify text-md">Nel mio ruolo di Business Coach professionista, sono qui per aiutarti a liberare il tuo potenziale attraverso percorsi di trasformazione su misura.</p>
            <p className="mb-4 text-justify text-md">
              Se sei una professionista desiderosa di dare una svolta alla tua carriera o un’azienda che cerca di potenziare il proprio team, sono qui per te. Insieme, possiamo creare una roadmap chiara verso il successo, superando ostacoli e
              realizzando i tuoi obiettivi con determinazione e consapevolezza.
            </p>
          </div>
          <button className="bg-teal-700 text-white px-6 py-2 rounded-lg">SCOPRI DI PIÙ</button>
        </div>
        {/* //2 */}
        <div className="w-[40%] items-center justify-center ml-auto mr-[1rem]">
          <img src={ImageSub1Logo} alt="Main" className="min-w-[500px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SubBody1;
