import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src="/path-to-your-logo.png" alt="Rosy Cosco" className="w-24 h-auto mb-2" />
          <p className="text-center md:text-left">EMPOWERMENT, PERFORMANCE & BUSINESS COACHING</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">ROSY COSCO</h2>
          <p>EMPOWERMENT, PERFORMANCE & BUSINESS COACH</p>
          <p className="mt-2">
            <i className="fas fa-envelope mr-2"></i>info@rosycosco.com
          </p>
          <p className="mt-2">
            <i className="fas fa-map-marker-alt mr-2"></i>Milano
          </p>
          <p className="mt-2">
            <i className="fas fa-globe mr-2"></i>Da remoto in tutta Italia e nel mondo
          </p>
          <div className="flex space-x-2 mt-2">
            <a href="/privacy-policy" className="text-white bg-green-500 px-2 py-1 rounded">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="text-white bg-green-500 px-2 py-1 rounded">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-2">SITEMAP</h2>
          <ul>
            <li className="mt-2">
              <a href="/chi-sono" className="text-white hover:underline">
                Chi sono
              </a>
            </li>
            <li className="mt-2">
              <a href="/coaching-donne" className="text-white hover:underline">
                Percorsi di coaching per donne
              </a>
            </li>
            <li className="mt-2">
              <a href="/coaching-aziende" className="text-white hover:underline">
                Percorsi di coaching per aziende
              </a>
            </li>
            <li className="mt-2">
              <a href="/assessment" className="text-white hover:underline">
                Assessment individuali e di team
              </a>
            </li>
            <li className="mt-2">
              <a href="/blog" className="text-white hover:underline">
                Blog
              </a>
            </li>
            <li className="mt-2">
              <a href="/contatti" className="text-white hover:underline">
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-center md:text-left">
        <p className="text-sm">Copyright 2022 Rosy Cosco. P. IVA 12374550965</p>
        <p className="text-sm">
          Made with{' '}
          <span role="img" aria-label="sparkles">
            ✨
          </span>{' '}
          by{' '}
          <a href="https://nicolecurioniweb.design" className="text-white hover:underline">
            Nicole Curioni web.design
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
