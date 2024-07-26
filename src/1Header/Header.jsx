import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link as ScrollLink } from 'react-scroll';
import LoginPage from '../components/loginPage';
import { LoginContext } from '../context/loginContext';
import './Header.css';
import LogoMain from '/assets/LogoMain1.png';

Modal.setAppElement('#root');

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, login, logout } = useContext(LoginContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['subbody2', 'subbody3', 'subbody4', 'contatti'];
      let foundActiveSection = false;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            foundActiveSection = true;
          }
        }
      });

      if (!foundActiveSection) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scroll
  };

  const handleLogin = (username, password) => {
    if (login(username, password)) {
      console.log('ok');
      closeModal();
    } else {
      console.log('Nome utente o password errati');
    }
  };

  return (
    <div className="w-[100vw] h-[20vh] flex-shrink-0">
      {!isScrolled && <div className="bg-pink-900 text-gray-200 text-center item-center justify-center py-[1rem] font-light text-sm">MASTERCLASS INTELLIGENZA EMOTIVA & LEADERSHIP</div>}
      <div className={`bg-white text-black font-light text-sm ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-pink z-10' : ''}`}>
        <div className="flex items-center justify-between">
          <ScrollLink to="top" smooth={true} duration={500} offset={-100} className="hover:cursor-pointer">
            <div className="flex items-center ">
              <img src={LogoMain} alt="Logo" className="w-[140px] h-[100px]" />
              <div className="w-[25rem] ml-[0.5rem]">
                <h1 className="w-full text-3xl font-bold text-pink-900" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.78rem' }}>
                  LARA COFFARI
                </h1>
                <p className="text-gray-600 text-xs" style={{ letterSpacing: '0.9rem' }}>
                  BUSINESS COACHING
                </p>
              </div>
            </div>
          </ScrollLink>
          <nav className="flex space-x-8 mr-[8rem]">
            <ScrollLink
              to="subbody2"
              smooth={true}
              duration={500}
              offset={-100}
              className={`cursor-pointer text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 ${
                activeSection === 'subbody2' ? 'after:bg-[#be123c]' : 'after:bg-transparent'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:transition-colors`}
              onSetActive={() => handleSetActive('subbody2')}
            >
              COACHING
            </ScrollLink>
            <ScrollLink
              to="subbody3"
              smooth={true}
              duration={500}
              offset={-100}
              className={`cursor-pointer text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 ${
                activeSection === 'subbody3' ? 'after:bg-[#be123c]' : 'after:bg-transparent'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:transition-colors`}
              onSetActive={() => handleSetActive('subbody3')}
            >
              ABOUT ME
            </ScrollLink>
            <ScrollLink
              to="subbody4"
              smooth={true}
              duration={500}
              offset={-100}
              className={`cursor-pointer text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 ${
                activeSection === 'subbody4' ? 'after:bg-[#be123c]' : 'after:bg-transparent'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:transition-colors`}
              onSetActive={() => handleSetActive('subbody4')}
            >
              CREDENTIALS
            </ScrollLink>
            <ScrollLink
              to="contatti"
              smooth={true}
              duration={500}
              offset={-100}
              className={`cursor-pointer text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 ${
                activeSection === 'contatti' ? 'after:bg-[#be123c]' : 'after:bg-transparent'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:transition-colors`}
              onSetActive={() => handleSetActive('contatti')}
            >
              EMAIL
            </ScrollLink>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="cursor-pointer text-red-900 font-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors"
              >
                LOGOUT
              </button>
            ) : (
              <button
                onClick={openModal}
                className="cursor-pointer text-black hover:text-pink-900 text-xs tracking-[0.2rem] relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-transparent hover:after:bg-[#be123c] after:transition-colors"
              >
                LOGIN
              </button>
            )}
          </nav>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Area Riservata Modal" className="flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-75">
        <LoginPage onLogin={handleLogin} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Header;
