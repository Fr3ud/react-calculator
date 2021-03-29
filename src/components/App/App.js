import React, { useState } from 'react';

import Display from '../Display';
import Keyboard from '../Keyboard';

import './App.css';

const App = () => {
  const [displayValue, setValue] = useState(0);
  const [memory, setMemory] = useState(null);

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case 'AC':
        setValue(0);
        setMemory(null);
        return;
      case '%':
        const percents = memory || 100;
        setValue(value / percents);
        return;
    }

    setValue((displayValue) => parseFloat(displayValue + buttonValue));
    console.log('buttonValue', buttonValue);
    console.log(displayValue);
  };

  return (
    <div className="App">
      <Display value={displayValue} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
