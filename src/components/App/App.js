import React, { useState } from 'react';

import Display from '../Display';
import Keyboard from '../Keyboard';

import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [resultValue, setResultValue] = useState('');
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [equals, setEquals] = useState(false);

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case 'AC':
        // null
        setDisplayValue('0');
        setResultValue('');
        setMemory(null);
        setOperator(null);
        setEquals(false);
        return;
      case '%':
        const percents = memory || 100;
        setDisplayValue(displayValue / percents);
        return;
      case '+':
        if (operator) {
          setOperator('+');
          setMemory(parseFloat(resultValue));
          setDisplayValue(`${resultValue} + `);
          setResultValue('');
          return;
        }
        setMemory(parseFloat(displayValue));
        setDisplayValue(`${displayValue} + `);
        setOperator('+');
        return;
      case '-':
        if (operator) {
          setOperator('-');
          setMemory(parseFloat(resultValue));
          setDisplayValue(`${resultValue} - `);
          setResultValue('');
          return;
        }
        setMemory(parseFloat(displayValue));
        setDisplayValue(`${displayValue} - `);
        setOperator('-');
        return;
      case '*':
        if (operator) {
          setOperator('*');
          setMemory(parseFloat(resultValue));
          setDisplayValue(`${resultValue} * `);
          setResultValue('');
          return;
        }
        setMemory(parseFloat(displayValue));
        setDisplayValue(`${displayValue} * `);
        setOperator('*');
        return;
      case '/':
        if (operator) {
          setOperator('/');
          setMemory(parseFloat(resultValue));
          setDisplayValue(`${resultValue} / `);
          setResultValue('');
          return;
        }
        setMemory(parseFloat(displayValue));
        setDisplayValue(`${displayValue} / `);
        setOperator('/');
        return;
      case '=':
        if (!operator) return;

        setOperator(null);
        setMemory(parseFloat(resultValue));
        setDisplayValue(resultValue);
        setResultValue('');
        setEquals(true);
        return;
      default:
        if (operator) {
          const rightNum = `${displayValue}${buttonValue}`.split(' ').pop();
          setDisplayValue(`${displayValue}${buttonValue}`);

          switch (operator) {
            case '+':
              setResultValue((memory + parseFloat(rightNum)).toString());
              return;
            case '-':
              setResultValue((memory - parseFloat(rightNum)).toString());
              return;
            case '*':
              setResultValue((memory * parseFloat(rightNum)).toString());
              return;
            case '/':
              if (parseFloat(rightNum) === 0) {
                setDisplayValue('ERROR'); // clear state
                return;
              }

              setResultValue((memory / parseFloat(rightNum)).toString());
              return;
          }

          return;
        } else {
          // null
          if (equals) {
            setDisplayValue(buttonValue); // not zero
            setResultValue('');
            setMemory(null);
            setOperator(null);
            setEquals(false);
            return;
          }
          setDisplayValue((displayValue) =>
            parseFloat(displayValue + buttonValue).toString()
          );
        }
    }

    console.log('buttonValue', buttonValue);
    console.log(displayValue);
  };

  return (
    <div className="App">
      <Display displayValue={displayValue} resultValue={resultValue} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
