import React from 'react';

import './Button.css';

const Button = ({ value }) => {
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

  return <div className={classes}>{value}</div>;
};

export default Button;
