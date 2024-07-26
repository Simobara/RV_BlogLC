import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === 'bara' && password === '3333') {
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return <LoginContext.Provider value={{ isLoggedIn, login, logout }}>{children}</LoginContext.Provider>;
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
