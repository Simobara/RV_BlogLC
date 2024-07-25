import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function Card({ imageSrc, title, description, buttonText }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 relative min-w-[5rem] overflow-hidden ">
      <div className="overflow-hidden rounded-t-lg">
        <img src={imageSrc} alt="Card Image" className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-pink-800 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {title.toUpperCase()}
        </h2>
        <p className="text-black mb-[1rem] max-h-[14rem] overflow-y-auto ">{description}</p>
        <div className="mt-[2rem] h-[2rem]">
          <button className="absolute w-[50%] left-1/2 transform -translate-x-1/2 bg-pink-800 text-white p-[.5rem] text-xs rounded-lg" style={{ bottom: '1rem', marginBottom: '1rem' }}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Card;
