import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Big from 'big.js';
import './index.css';

let x = new Big(123.4567);

const number = `My first big number is: ${x}`;

const element = <div>{number}</div>;

ReactDOM.render(element, document.getElementById('root'));