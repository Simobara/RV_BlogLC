import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

Modal.setAppElement('#root');

const EditableText = ({ className, style, text, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState(text);

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
      <button onClick={toggleModal} style={{ display: 'block', margin: '10px 0' }}>
        📝
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal} contentLabel="Modifica Testo">
        <h2>Modifica Testo</h2>
        <ReactQuill value={currentText} onChange={handleChange} />
        <button onClick={handleSave} className="bg-green-400">
          Salva
        </button>
        <button onClick={toggleModal} className="border-b-4 text-red">
          Chiudi
        </button>
      </Modal>
    </div>
  );
};

EditableText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

EditableText.defaultProps = {
  className: '',
  style: {},
};

export default EditableText;
