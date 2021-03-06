import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div id="display" className="flex-cont">
      <p>{result}</p>
    </div>
  );
};

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };

export default Display;
