import React from 'react';

import Display from '../Display';
import Keyboard from '../Keyboard';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Keyboard />
      </div>
    );
  }
}
