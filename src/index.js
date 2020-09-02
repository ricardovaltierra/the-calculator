import React from 'react';
import ReactDOM from 'react-dom';
import Big from 'big.js';
import './index.css';

const x = new Big(123.45678);

const number = `My first big number is: ${x}`;

const element = <div>{number}</div>;

ReactDOM.render(element, document.getElementById('root'));
