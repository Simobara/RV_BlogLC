import PropTypes from 'prop-types';
import React from 'react';

const ModalPP = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-start z-50">
      <div className="bg-white p-4 rounded shadow-lg  w-full relative m-4 border-4 border-black">
        <button className="absolute top-2 right-2 text-red-600 font-extrabold text-3xl mr-[2rem]" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

ModalPP.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalPP;
