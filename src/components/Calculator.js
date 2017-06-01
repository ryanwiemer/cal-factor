import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class Calculator extends Component {
  constructor(){
    super()
      this.state = {
        isigValue : '',
        bloodValue : ''
      }
  }
  resetValues = () => {
      this.setState({bloodValue: ''
    })
    this.setState({isigValue: ''
    })
  }
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
            value = {this.state.isigValue}
            onChange={(e) => this.setState({ isigValue: e.target.value })}
          />
        </div>

        <div className="blood">
          <lablel>Blood Glucose Reading</lablel>
          <InputMask
            className="input input--blood"
            name="blood"
            type="text"
            mask="999"
            maskChar=" "
            value = {this.state.bloodValue}
            onChange={(e) => this.setState({ bloodValue: e.target.value })}
          />
        </div>

        <button
          className="button button--refresh"
          name="refresh"
          onClick={this.resetValues}>
          &#x21bb;
        </button>

      </div>
    );
  }
}

export default Calculator;
