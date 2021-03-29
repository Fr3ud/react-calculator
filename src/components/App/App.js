import React, { useState } from 'react';

import Display from '../Display';
import Keyboard from '../Keyboard';

import './App.css';
import Button from '../Button';

const App = () => {
  const [value, setValue] = useState('0');
  const handleButtonClick = (num) => {
    console.log('num', num);
    setValue((value) => parseFloat(value + num).toString());
    console.log(value);
  };

  return (
    <div className="App">
      <Display value={value} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
