import React from 'react';

import './style.css';

export default ({ id, value, initial }) => {
  // const idStr = id.toString();
  // const idPadded = idStr.length === 1 ? idStr.padStart(1, '0') : idStr;
  const idStr = id < 10 ? `0${id}` : id.toString();
  const row = Number(idStr[0]);
  console.log(idStr);
  return (
    <div
      className={`
        tile
        ${initial ? ' initial' : ''}
        ${(id + 1) % 3 ? '' : ' right-border'}
      `}
    >
      {value !== '.' ? value : ''}
    </div>
  );
};
