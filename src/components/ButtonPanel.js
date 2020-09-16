import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  function handleClick(name) {
    clickHandler(name);
  }

  return (
    <div id="buttonPanel" className="flex-cont">
      <div className="row">
        <Button name="AC" clickHandler={handleClick} color />
        <Button name="+/-" clickHandler={handleClick} color />
        <Button name="%" clickHandler={handleClick} color />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="7" clickHandler={handleClick} color />
        <Button name="8" clickHandler={handleClick} color />
        <Button name="9" clickHandler={handleClick} color />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="4" clickHandler={handleClick} color />
        <Button name="5" clickHandler={handleClick} color />
        <Button name="6" clickHandler={handleClick} color />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="1" clickHandler={handleClick} color />
        <Button name="2" clickHandler={handleClick} color />
        <Button name="3" clickHandler={handleClick} color />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="0" clickHandler={handleClick} color wide />
        <Button name="." clickHandler={handleClick} color />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
