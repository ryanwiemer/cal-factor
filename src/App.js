import React, { Component } from 'react';
import Calculator from './components/Calculator';
import About from './components/About';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator/>
        <About/>
      </div>
    );
  }
}

export default App;
