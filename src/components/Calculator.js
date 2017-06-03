import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
      this.state = {
        isigValue : '',
        bloodValue : '',
        acceptbleCalibration: '',
        calculatorNotification: ''
      }
  }

  resetValues = () => {
    this.setState({
      bloodValue: '',
      isigValue: '',
      acceptbleCalibration: '',
      calculatorNotification: ''
    });
  }

  calibrationEquation = (a,b) => {

    const equationResult = a / b;

    if (equationResult >= 1.5 && equationResult <= 20 ) {
      console.log(equationResult);
      this.setState({
        acceptbleCalibration: 'true',
        calculatorNotification: 'notification--good'
      });
    }

    if (equationResult > 0 && equationResult < 1.5 ) {
      console.log(equationResult);
      this.setState({
        acceptbleCalibration: 'false',
        calculatorNotification: 'notification--bad'
      });
    }

    if (equationResult > 20 ) {
      console.log(equationResult);
      this.setState({
        acceptbleCalibration: 'false',
        calculatorNotification: 'notification--bad'
      });
    }

    if (a.length === 0 ) {
      console.log("Blood Glucose Reading is missing");
      this.setState({
        acceptbleCalibration: 'false',
        calculatorNotification: 'notification--missing'
      });
    }

    if (b.length === 0 ) {
      console.log("ISIG Value is missing");
      this.setState({
        acceptbleCalibration: 'false',
        calculatorNotification: 'notification--missing'
      });
    }

  }

  render() {
    return (
      <div className={'Calculator ' + this.state.calculatorNotification}>

        <h1 className="title">ISIG Calculator</h1>

        <div className="blood">
          <lablel>Blood Glucose Reading</lablel>
          <input
            className="input input--blood"
            name="blood"
            type="number"
            value = {this.state.bloodValue}
            onChange={(event) => this.setState({ bloodValue: event.target.value })}
          />
        </div>

        <div className="isig">
          <lablel>ISIG Value</lablel>
          <input
            className="input input--isig"
            name="isig"
            type="number"
            value = {this.state.isigValue}
            onChange={(event) => this.setState({ isigValue: event.target.value })}
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
