import axios from 'axios'; // Assicurati di installare axios: npm install axios
import React, { useEffect, useState } from 'react';
import LogoMain from '/assets/LogoMain.png';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    messaggio: '',
    privacyPolicy: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Stato per il messaggio di invio

  useEffect(() => {
    validateForm(formData);
  }, [formData]);

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

  const validateForm = (data) => {
    const { nome, cognome, email, messaggio, privacyPolicy } = data;
    if (nome && cognome && email && validateEmail(email) && messaggio && privacyPolicy) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

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

  return (
    <div className="w-full h-[40rem] flex overflow-hidden">
      <div className="w-1/2 bg-pink-900 text-white flex flex-col items-center justify-center p-10">
        <img src={LogoMain} alt="Logo" className="h-32 mb-8" />
        <h2 className="text-3xl mb-4">Contatti</h2>
        <p className="text-xl mb-4">Rosy Cosco</p>
        <p className="text-sm mb-4">EMPOWERMENT, PERFORMANCE & BUSINESS COACH</p>
        <p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.</p>
        <p className="text-center">Telefono: +39 123 456 789</p>
        <p className="mt-2">
          <i className="fas fa-envelope mr-2"></i>info@rosycosco.com
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
      <div className="w-1/2 bg-white p-10 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
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
          <div className="mb-4">
            <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} className="mr-2 leading-tight" required />
            <span className="text-gray-700 text-sm">
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
    </div>
  );
};

export default Contatti;
