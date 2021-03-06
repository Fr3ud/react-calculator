import React from 'react';

import './Display.css';

const Display = ({ displayValue, resultValue }) => {
  let classes = 'operation';

  if (displayValue.length > 12) {
    classes += ' font-s';
  }

  if (displayValue.length > 30) {
    classes += ' font-xs';
  }

  return (
    <div className="Display">
      <span className={classes}>{displayValue}</span>
      <span className="result">{resultValue}</span>
    </div>
  );
};

export default Display;
