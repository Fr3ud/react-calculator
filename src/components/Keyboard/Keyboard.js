import React from 'react';

import Button from '../Button';

import './Keyboard.css';

const Keyboard = ({ onButtonClick }) => {
  return (
    <div className="Keyboard">
      <Button value="AC" onButtonClick={onButtonClick} />
      <Button value="⌫" onButtonClick={onButtonClick} />
      <Button value="%" onButtonClick={onButtonClick} />
      <Button value="/" onButtonClick={onButtonClick} />
      <Button value="7" onButtonClick={onButtonClick} />
      <Button value="8" onButtonClick={onButtonClick} />
      <Button value="9" onButtonClick={onButtonClick} />
      <Button value="*" onButtonClick={onButtonClick} />
      <Button value="4" onButtonClick={onButtonClick} />
      <Button value="5" onButtonClick={onButtonClick} />
      <Button value="6" onButtonClick={onButtonClick} />
      <Button value="-" onButtonClick={onButtonClick} />
      <Button value="1" onButtonClick={onButtonClick} />
      <Button value="2" onButtonClick={onButtonClick} />
      <Button value="3" onButtonClick={onButtonClick} />
      <Button value="+" onButtonClick={onButtonClick} />
      <Button value="." onButtonClick={onButtonClick} />
      <Button value="0" onButtonClick={onButtonClick} />
      <Button value="=" onButtonClick={onButtonClick} />
    </div>
  );
};

export default Keyboard;
