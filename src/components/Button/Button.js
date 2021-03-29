import React from 'react';

import './Button.css';

const Button = ({ value, onButtonClick }) => {
  let classes = 'Button';

  if (value === 'AC') {
    classes += ' clear';
  }

  if (value === '=') {
    classes += ' equals';
  }

  if (['/', '*', '-', '+'].includes(value)) {
    classes += ' operator';
  }

  return (
    <div className={classes} onClick={() => onButtonClick(value)}>
      {value}
    </div>
  );
};

export default Button;
