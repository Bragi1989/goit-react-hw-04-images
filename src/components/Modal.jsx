import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const handleEscKeyPress = useCallback((event) => {
    if (event.code === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleOverlayClick = useCallback((event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [handleEscKeyPress]);

  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
            <img src={imageUrl} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Modal;