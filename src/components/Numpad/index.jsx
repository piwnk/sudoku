import React, { Component } from 'react';

import './style.css';

const digits = [...Array(9).keys()].map(i => i + 1);

const Numpad = ({ currentValue, pickNumber }) => (
  <div className="numpad">
    {digits.map(digit => (
      <div
        key={digit}
        className={`digit${currentValue === digit ? ' active' : ''}`}
        onClick={(e => pickNumber(e.target.text))}
      >
        {/* <p> */}
        {digit}
        {/* </p> */}
      </div>
    ))}
  </div>
);

export default Numpad;
