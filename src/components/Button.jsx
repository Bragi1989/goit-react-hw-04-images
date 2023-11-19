import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, isVisible }) => {
  return (
    <button className={css.loadButton} type="button" onClick={onClick} style={{ display: isVisible ? 'block' : 'none' }}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

Button.defaultProps = {
  isVisible: true,
};

export default Button;