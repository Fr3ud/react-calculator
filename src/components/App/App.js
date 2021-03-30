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

  const clearState = () => {
    setDisplayValue('0');
    setResultValue('');
    setMemory(null);
    setOperator(null);
    setEquals(false);
  };

  const initOperator = (operator) => {
    setMemory(parseFloat(displayValue));
    setDisplayValue((value) => `${value} ${operator} `);
    setOperator(operator);
  };

  const updateOperator = (operator) => {
    setOperator(operator);
    setMemory(parseFloat(resultValue));
    setDisplayValue(`${resultValue} ${operator} `);
    setResultValue('');
  };

  const getSecondOperand = (value) => value.split(' ').pop();

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case 'AC':
        clearState();
        return;

      case '⌫':
        if (operator) {
          const arr = displayValue.split(' ');
          const newValue = arr.pop().slice(0, -1);
          arr.push(newValue);

          setDisplayValue(arr.join(' '));
          setResultValue('');
          return;
        }

        setDisplayValue((v) => v.slice(0, -1) || '0');
        return;

      case '%':
        if (!memory) {
          const percents = parseFloat(displayValue) / 100;
          setDisplayValue(percents);
          setResultValue(percents);
          return;
        }

        const secondOperand = parseFloat(getSecondOperand(displayValue));
        const percents = (memory / 100) * secondOperand;
        let result = 0;

        if (operator) {
          switch (operator) {
            case '+':
              result = parseFloat(resultValue) - secondOperand + percents;
              break;
            case '-':
              result = parseFloat(resultValue) + secondOperand - percents;
              break;
            case '*':
              result = (parseFloat(resultValue) / secondOperand) * percents;
              break;
            case '/':
              result = (parseFloat(resultValue) * secondOperand) / percents;
              break;
          }
        }

        setResultValue(result);
        setDisplayValue(result);
        return;

      case '.':
        if (operator) {
          const secondOperand = getSecondOperand(displayValue);

          if (secondOperand.includes('.')) return;
          setDisplayValue((value) => value + '.');
          return;
        }

        if (displayValue.includes('.')) return;
        setDisplayValue((value) => value + '.');
        return;

      case '+':
        if (operator) {
          updateOperator('+');
          return;
        }

        initOperator('+');
        return;

      case '-':
        if (operator) {
          updateOperator('-');
          return;
        }

        initOperator('-');
        return;

      case '*':
        if (operator) {
          updateOperator('*');
          return;
        }

        initOperator('*');
        return;

      case '/':
        if (operator) {
          updateOperator('/');
          return;
        }

        initOperator('/');
        return;

      case '=':
        if (!operator) return;

        setDisplayValue(resultValue);
        setMemory(parseFloat(resultValue));
        setResultValue('');
        setOperator(null);
        setEquals(true);
        return;

      default:
        if (operator) {
          const values = displayValue.split(' ');
          const secondOperand = parseFloat(
            getSecondOperand(values.pop() + buttonValue)
          );
          values.push(secondOperand.toString());
          setDisplayValue(values.join(' '));

          switch (operator) {
            case '+':
              setResultValue((memory + secondOperand).toString());
              return;
            case '-':
              setResultValue((memory - secondOperand).toString());
              return;
            case '*':
              setResultValue((memory * secondOperand).toString());
              return;
            case '/':
              if (secondOperand === 0) {
                clearState();
                setResultValue('ERROR');
                return;
              }

              setResultValue((memory / secondOperand).toString());
              return;
          }

          return;
        } else {
          if (equals) {
            clearState();
            setDisplayValue(buttonValue);
            return;
          }

          if (displayValue.includes('.') && buttonValue === '0') {
            setDisplayValue((value) => value + buttonValue);
          } else {
            setDisplayValue((value) =>
              parseFloat(value + buttonValue).toString()
            );
          }
        }
    }
  };

  return (
    <div className="App">
      <Display displayValue={displayValue} resultValue={resultValue} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
