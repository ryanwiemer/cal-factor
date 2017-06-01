import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">

        <h1 className="title">ISIG Calculator</h1>

        <div className="isig">
          <lablel>ISIG Value</lablel>
          <InputMask
            className="input input--isig"
            name="isig"
            type="text"
            mask="9.99"
            maskChar=" "
          />
        </div>

        <div className="blood">
          <lablel>Blood Glucose Reading</lablel>
          <InputMask
            className="input input--blood"
            name="blood"
            type="text"
            step="1"
            mask="999"
            maskChar=" "
          />
        </div>

        <button
          className="button button--refresh"
          name="refresh">
          &#x21bb;
        </button>

      </div>
    );
  }
}

export default Calculator;
