import React from 'react';

import './Display.css';

export default class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <span className="operation">5 + 2</span>
        <span className="result">7</span>
      </div>
    );
  }
}
