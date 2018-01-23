import React from 'react';

import './style.css';

const digits = [...Array(9).keys()].map(i => i + 1);
digits.push('');

export default ({ handleMouseClick, handleMouseLeave }) => (
  <div
    className="numpad"
    onMouseLeave={handleMouseLeave}
  >
    {digits.map(digit => (
      <div
        className="digit"
        key={digit}
        onClick={(e => handleMouseClick(e.target.innerText))}
      >
        {digit}
      </div>
    ))}
    <div
      className="digit central"
      onClick={(e => handleMouseClick(e.target.innerText))}
    />
  </div>
);
