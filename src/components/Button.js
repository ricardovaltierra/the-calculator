import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, wide, color, clickHandler,
  } = props;
  const styleButton = `${wide ? 'zero' : ''} ${color ? 'color' : ''}`;

  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <button type="button" className={styleButton} onClick={handleClick}>{name}</button>
  );
};

Button.defaultProps = {
  wide: false,
  color: false,
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

export default Button;
