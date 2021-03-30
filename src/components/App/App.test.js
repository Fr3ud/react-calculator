import { render } from '@testing-library/react';
import trimZeros from '../../utils/trimZeros';
import getSecondOperand from '../../utils/getSecondOperand';
import App from './App';

describe('Components: ', () => {
  test('render Display', () => {
    render(<App />);
    const Display = document.querySelector('.Display');
    expect(Display).toBeInTheDocument();
  });

  test('render Keyboard', () => {
    render(<App />);
    const Keyboard = document.querySelector('.Keyboard');
    expect(Keyboard).toBeInTheDocument();
  });

  test('Starting value is zero', () => {
    render(<App />);
    const value = document.querySelector('.operation').innerHTML;
    expect(value).toEqual('0');
  });
});

describe('Functions: ', () => {
  test('trimZeros() should return value without trailing zeros', () => {
    expect(trimZeros(0.1 + 0.2)).toEqual(0.3);
  });

  test('getSecondOperand() should return second operand', () => {
    expect(getSecondOperand('1 + 2')).toEqual('2');
  });
});
