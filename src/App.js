import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
