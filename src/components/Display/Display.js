import React from 'react';

import './Display.css';

const Display = ({ value }) => {
  return (
    <div className="Display">
      <span className="operation">{value}</span>
      <span className="result">7</span>
    </div>
  );
};

export default Display;
