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
        <div className="lg:w-[50%] md:w-[50%] md:mr-[5%] sm:mr-[10%] mr-[10%] ml-[2rem] bg-white rounded-lg justify-between ">
          <div className="pb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Welcome!
            </h1>
            <p className="mb-4 text-justify text-md">
              Sono Lara, <strong>Business Coach, Consulente di Carriera, Formatrice e Assessor in Intelligenza Emotiva</strong>, specializzata in empowerment individuale, femminile e organizzativo.
            </p>
            <p className="mb-4 text-justify text-md">Nel mio ruolo di Business Coach professionista, sono qui per aiutarti a liberare il tuo potenziale attraverso percorsi di trasformazione su misura.</p>
            <p className="mb-4 text-justify ">
              Mi occupo di gestione del tempo, mi piace definirmi un’allenatrice dell’organizzazione. Work&life balance per me è uno stile di vita e aiuto liberi professionisti e aziende a beneficiarne. Sei multipotenziale? Ti annoi a fare una cosa
              sola per volta, hai tante passioni e non vuoi rinunciare a nessuna? Sappi che non devi farlo, anche io sono come te e ti capisco. Ho acquisito le tecniche per gestire al meglio ciò che inizialmente sembrava caos, ma ora è luce.
            </p>
          </div>
          {/* <button className="bg-teal-700 text-white px-6 py-2 rounded-lg"></button> */}
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
