import PropTypes from 'prop-types';
import React, { useState } from 'react';

const LoginPage = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = onLogin(username, password);
    if (!loginSuccess) {
      setError('Credenziali non valide');
    }
  };

  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <button className="absolute top-2 right-2 bg-transparent border-none text-xl cursor-pointer text-red-500 hover:text-pink-500" onClick={onClose}>
        ✖
      </button>
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4 w-full text-left">
          <label className="block mb-2">
            Nome utente:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
          </label>
        </div>
        <div className="mb-4 w-full text-left">
          <label className="block mb-2">
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
          </label>
        </div>
        <button type="submit" className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800">
          Login
        </button>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginPage;
