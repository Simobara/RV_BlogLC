import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-start"></div>
      <div className="container mx-auto mt-8 text-center md:text-left">
        <p className="text-sm">Copyright {currentYear} Lara Coffari P. IVA 123 456 789 12</p>
        <p className="text-sm">
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
