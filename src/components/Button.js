import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const { name } = props;
    return (
      <button types='button'>{name}</button>
    );
}

Button.propTypes = { name: PropTypes.string.isRequired };
