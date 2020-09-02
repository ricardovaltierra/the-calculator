import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color } = props;
  const styleButton = `${wide ? 'zero' : ''} ${color ? 'color' : ''}`;
  return (
    <button type="button" className={styleButton}>{name}</button>
  );
};

Button.defaultProps = {
  wide: false,
  color: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

export default Button;
