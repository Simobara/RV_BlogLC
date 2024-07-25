import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-start"></div>
      <div className="container mx-auto mt-8 text-center md:text-left">
        <p className="text-sm">
          Copyright ©{currentYear} Tutti i diritti riservati Lara Coffari- Professional Organizer Professione regolamentata dalla Legge 4/2013- Prestazioni ai sensi dell’ex art.2222 del C.C. Ho sottoscritto e applico nel mio lavoro il Codice Etico di
          APOI – Associazione Professional Organizers Italia. Visualizza l’attestato di qualità e di qualificazione professionale Organizzare il Tempo rilasciato da APOI.
        </p>
        <p className="text-sm mt-[2rem]">
          Made by
          <span role="img" aria-label="sparkles">
            ✨
          </span>
          <a href="https://simonbaraofficial.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Baravelli Simone <span>✨</span>web.designer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
