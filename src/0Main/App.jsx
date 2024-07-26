import React from 'react';
import Header from '../1Header/Header';
import Body from '../2Body/Body';
import Footer from '../3Footer/Footer';
import { LoginProvider } from '../context/loginContext';

function App() {
  return (
    <LoginProvider>
      <div className="min-h-[100vh] min-w-[100vw] flex flex-col">
        <Header />
        <Body />
        <Footer />
      </div>
    </LoginProvider>
  );
}

export default App;
