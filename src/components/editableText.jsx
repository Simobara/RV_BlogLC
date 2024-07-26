import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { LoginContext } from '../context/loginContext';

Modal.setAppElement('#root');

const EditableText = ({ className, style, text, onSave }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [currentText, setCurrentText] = useState(text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  const handleChange = (value) => {
    setCurrentText(value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = () => {
    onSave(currentText);
    toggleModal();
  };

  return (
    <div>
      <div className={className} style={style} dangerouslySetInnerHTML={{ __html: currentText }} />
      {isLoggedIn && (
        <button onClick={toggleModal} className="block mt-2 p-2 bg-blue-500 text-white rounded">
          📝 Modifica
        </button>
      )}
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal} contentLabel="Modifica Testo">
        <div className="relative">
          <button onClick={toggleModal} className="absolute top-2 right-2 text-red-500 hover:text-pink-500 text-2xl bg-transparent border-none cursor-pointer">
            ✖
          </button>
          <h2 className="text-2xl mb-4">Modifica Testo</h2>
          <ReactQuill value={currentText} onChange={handleChange} />
          <div className="mt-4 flex justify-end">
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              Salva
            </button>
            <button onClick={toggleModal} className="bg-gray-500 text-white px-4 py-2 rounded">
              Chiudi
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditableText;

EditableText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};
