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
        if (!memory) {
          const percents = parseFloat(displayValue) / 100;
          setDisplayValue(percents);
          setResultValue(percents);
          return;
        }

        const right = parseFloat(displayValue.split(' ').pop());
        const percents = (memory / 100) * right;
        let result = 0;

        if (operator) {
          switch (operator) {
            case '+':
              result = parseFloat(resultValue) - right + percents;
              break;
            case '-':
              result = parseFloat(resultValue) + right - percents;
              break;
            case '*':
              result = (parseFloat(resultValue) / right) * percents;
              break;
            case '/':
              result = (parseFloat(resultValue) * right) / percents;
              break;
          }
        }

        setResultValue(result);
        setDisplayValue(result);
        return;
      case '.':
        if (operator) {
          const rightNum = displayValue.split(' ').pop();
          if (rightNum.includes('.')) return;
          setDisplayValue(displayValue + '.');
          return;
        }

        if (displayValue.includes('.')) return;
        setDisplayValue(displayValue + '.');
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
      // case '0':
      //   if (displayValue.includes('.')) {
      //     setDisplayValue(displayValue + buttonValue);
      //   }
      //
      //   if (operator) {
      //     setDisplayValue((displayValue) =>
      //       parseFloat(displayValue + buttonValue).toString()
      //     );
      //   }

      // return;
      default:
        if (operator) {
          const rightNum = `${displayValue}${buttonValue}`.split(' ').pop();

          // console.log('right', rightNum);
          // console.log('buttonValue', `${displayValue}${buttonValue}`);
          // if (buttonValue === '.' && rightNum.includes('.')) return;
          setDisplayValue(`${displayValue}${buttonValue}`);
          // console.log('ads');

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
          if (displayValue.includes('.') && buttonValue === '0') {
            setDisplayValue(`${displayValue}${buttonValue}`);
          } else {
            setDisplayValue((displayValue) =>
              parseFloat(displayValue + buttonValue).toString()
            );
          }
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
