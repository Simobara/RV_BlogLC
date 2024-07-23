import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ imageSrc, description }) => {
  return (
    <div className="bg-white w-full h-[25rem] text-black flex flex-col items-center justify-start pt-10">
      <img src={imageSrc} alt="Description" className="w-32 h-32 object-contain mb-4" />
      <div className="text-center text-lg">{description}</div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
