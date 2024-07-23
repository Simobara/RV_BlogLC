import React, { useEffect, useState } from 'react';
import LogoMain from '../../public/assets/LogoMain.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Load the font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100%] flex-shrink-0">
      {!isScrolled && (
        <div className="bg-pink-900 text-gray-200 text-center item-center justify-center py-[1rem] font-light text-sm">
          MASTERCLASS INTELLIGENZA EMOTIVA & LEADERSHIP
        </div>
      )}
      <div className={`bg-white text-black py-[1rem] font-light text-sm ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-pink z-10' : ''}`}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center mx-[3rem]">
            <img src={LogoMain} alt="Logo" className="h-[3rem]" />
            <div className="w-[25rem] ml-[0.5rem]">
              <h1 className="w-full text-3xl font-bold text-pink-900" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.7rem' }}>
                ROSY COSCO
              </h1>
              <p className="text-gray-600 text-xs" style={{ letterSpacing: '-0.04rem' }}>
                EMPOWERMENT, PERFORMANCE & BUSINESS COACHING
              </p>
            </div>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors">
              PER DONNE
            </a>
            <a href="#" className="text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors">
              PER AZIENDE
            </a>
            <a href="#" className="text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors">
              CONTATTI
            </a>
            <a href="#" className="text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors">
              BLOG
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
