import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
      this.state = {
        isig : '',
        blood : '',
        notificationMessage: ''
      }
  }

  resetValues = () => {
    this.setState({
      blood: '',
      isig: '',
      notificationMessage: ''
    });
  }

  calibrationEquation = (a,b) => {

    const equationResult = a / b;

    if (equationResult >= 1.5 && equationResult <= 20 ) {
      console.log(equationResult);
      this.setState({
        notificationMessage: 'notification--calibration-accepted'
      });
    }

    if (equationResult < 1.5 ) {
      console.log(equationResult);
      this.setState({
        notificationMessage: 'notification--calibration-rejected'
      });
    }

    if (equationResult > 20 ) {
      console.log(equationResult);
      this.setState({
        notificationMessage: 'notification--calibration-rejected'
      });
    }

    if (a.length === 0 ) {
      console.log("Blood Glucose Reading is missing");
      this.setState({
        notificationMessage: 'notification--missing-data'
      });
    }

    if (b.length === 0 ) {
      console.log("ISIG Value is missing");
      this.setState({
        notificationMessage: 'notification--missing-data'
      });
    }

  }

  render() {
    return (
      <div className={'Calculator ' + this.state.notificationMessage}>

        <h1 className="title">ISIG Calculator</h1>

        <div className="input-container">
          <input
            className="input input--blood"
            name="blood"
            type="number"
            placeholder="Blood"
            step="1"
            value = {this.state.blood}
            onChange={(event) => this.setState({ blood: event.target.value })}
          />
          <input
            className="input input--isig"
            name="isig"
            type="number"
            placeholder="Isig"
            step=".1"
            value = {this.state.isig}
            onChange={(event) => this.setState({ isig: event.target.value })}
          />
        </div>

        <div className="controls">
          <button
            className="button button--reset"
            name="reset"
            onClick={this.resetValues}>
            Reset
          </button>

          <button
            className="button button--calculate"
            name="calculate"
            onClick={()=> this.calibrationEquation(this.state.blood,this.state.isig)}>
            Calculate
          </button>
        </div>

      </div>
    );
  }
}

export default Calculator;
