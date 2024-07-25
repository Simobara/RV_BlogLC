import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import LogoMain1 from '../../../../public/assets/LogoMain1.png';
import ModalCP from '../ModalCookPolicy/modalCP';
import CookiePolicyText from '../ModalCookPolicy/text';
import ModalPP from '../ModalPrivPolicy/modalPP';
import PrivacyPolicyText from '../ModalPrivPolicy/text';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    messaggio: '',
    privacyPolicy: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModalCP, setShowModalCP] = useState(false);
  const [showModalPP, setShowModalPP] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = useCallback((data) => {
    const { nome, cognome, email, messaggio, privacyPolicy } = data;
    if (nome && cognome && email && validateEmail(email) && messaggio && privacyPolicy) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send-email', formData);
      console.log(response.data);
      setSubmitStatus('success');
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        messaggio: '',
        privacyPolicy: false,
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    validateForm(formData);
  }, [formData, validateForm]);

  // Ricarica FontAwesome icons dopo che il componente è montato
  useEffect(() => {
    const loadFontAwesome = () => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
      script.async = true;
      document.body.appendChild(script);
    };
    loadFontAwesome();
  }, []);

  const handleOpenModalCP = () => setShowModalCP(true);
  const handleCloseModalCP = () => setShowModalCP(false);

  const handleOpenModalPP = () => setShowModalPP(true);
  const handleCloseModalPP = () => setShowModalPP(false);

  return (
    <div className="w-full h-[40rem] flex overflow-hidden">
      <div className="w-1/2 bg-pink-900 text-white flex flex-col items-start justify-start p-5">
        <div className="text-center items-center justify-center">
          <h2 className="text-3xl mb-4">
            <i className="fas fa-envelope mr-2" />
          </h2>
        </div>
        {/* <img src={LogoMain} alt="Logo" className="h-32 mb-8" /> */}
        <div className="flex flex-col">
          <p className="text-xl mb-[1rem]">Lara Coffari</p>
          <p className="text-sm mb-[4rem]">EMPOWERMENT, PERFORMANCE & BUSINESS COACH</p>
          <p className="mb-[4rem] text-green-500 font-semibold">&quot;Procrastinare è l&apos;arte di stare al passo con ciò che è successo ieri, per evitare il domani&quot; -Wayne Dyer-</p>
          <p className="mb-[1rem] flex items-center text-gray-400">
            <i className="fas fa-phone-alt mr-2"></i>
            +39 340 76 330 65
          </p>
          <p className="mt-2 text-gray-400 black font-bold">
            <i className="fas fa-envelope mr-2"></i>info@laracoffari.it
          </p>
        </div>

        <div className="flex mt-4 text-center justify-center items-center">
          <p className="mb-2 mr-[1rem]">Seguimi su:</p>
          <div className="flex space-x-4 ">
            <a href="https://www.instagram.com/laracoffari/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-white text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/lalaralab/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-white text-2xl"></i>
            </a>
            <a href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40_laralab_&lang=en&enter_method=mandatory" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok text-white text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="flex space-x-2 mt-[20%]">
          <a onClick={handleOpenModalPP} className="text-white bg-green-500 px-2 py-1 rounded cursor-pointer">
            Privacy Policy
          </a>
          <a onClick={handleOpenModalCP} className="text-white bg-green-500 px-2 py-1 rounded cursor-pointer">
            Cookie Policy
          </a>
        </div>
      </div>
      <div className="w-1/2 bg-white p-10 flex items-center justify-center relative bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${LogoMain1})`, backgroundSize: '280% 220%', backgroundPosition: 'center -27rem' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50"></div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg relative z-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
              Nome *
            </label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cognome">
              Cognome *
            </label>
            <input type="text" name="cognome" value={formData.cognome} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email *
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            {!validateEmail(formData.email) && formData.email && <p className="text-red-500 text-xs italic">Indirizzo email non valido</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="messaggio">
              Messaggio *
            </label>
            <textarea name="messaggio" value={formData.messaggio} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4 bg-white">
            <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} className="mr-2 leading-tight" required />
            <span className="text-gray-700 text-sm z-10">
              Ho letto l&apos; informativa sulla
              <a href="/privacy-policy" className="text-pink-900">
                {' '}
                Privacy Policy{' '}
              </a>
              e acconsento al trattamento dei dati personali ai sensi del Regolamento Europeo n. 2016/679.
            </span>
          </div>
          {submitStatus === 'success' && <p className="text-green-500 text-xs italic">Messaggio inviato correttamente!</p>}
          {submitStatus === 'error' && <p className="text-red-500 text-xs italic">Invio del messaggio fallito. Riprova più tardi.</p>}
          <div className="flex items-center justify-between">
            <button type="submit" className={`bg-pink-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-700'}`} disabled={!isFormValid}>
              Invia
            </button>
          </div>
        </form>
      </div>

      <ModalCP show={showModalCP} onClose={handleCloseModalCP}>
        <CookiePolicyText />
      </ModalCP>

      <ModalPP show={showModalPP} onClose={handleCloseModalPP}>
        <PrivacyPolicyText />
      </ModalPP>
    </div>
  );
};

export default Contatti;
