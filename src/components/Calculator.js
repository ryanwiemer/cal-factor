import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
      this.state = {
        isigValue : '',
        bloodValue : '',
        acceptbleCalibration: ''
      }
  }

  resetValues = () => {
    this.setState({bloodValue: ''})
    this.setState({isigValue: ''})
    this.setState({acceptbleCalibration: ''})
  }

  calibrationEquation = (a,b) => {
    const equationResult = a / b;
    if (equationResult >=1.5 && equationResult <= 20 ) {
      this.setState({acceptbleCalibration: 'true'})
    }
    else {
      this.setState({acceptbleCalibration: 'false'})
    }
  }

/*
  displayNotification() {
    if (this.acceptbleCalibration = 'true') {
      console.log("Yay!!!!");
    }
    else {
      console.log("Boo!!!");
    }
  }
  */

  render() {
    return (
      <div className="Calculator">

        <h1 className="title">ISIG Calculator</h1>

        <div className="blood">
          <lablel>Blood Glucose Reading</lablel>
          <input
            className="input input--blood"
            name="blood"
            type="number"
            value = {this.state.bloodValue}
            onChange={(e) => this.setState({ bloodValue: e.target.value })}
          />
        </div>

        <div className="isig">
          <lablel>ISIG Value</lablel>
          <input
            className="input input--isig"
            name="isig"
            type="number"
            value = {this.state.isigValue}
            onChange={(e) => this.setState({ isigValue: e.target.value })}
          />
        </div>

        <button
          className="button button--refresh"
          name="refresh"
          onClick={this.resetValues}>
          &#x21bb;
        </button>

        <button
          className="button button--calibrate"
          name="calibrate"
          onClick={()=> this.calibrationEquation(this.state.bloodValue,this.state.isigValue)}>
          Calculate
        </button>

      </div>
    );
  }
}

export default Calculator;
