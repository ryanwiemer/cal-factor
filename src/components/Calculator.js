import React, { Component } from 'react';
import MaskedTextInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      isig: '',
      blood: '',
      notificationClass: '',
      calFactor: '',
    };
  }

  // Reset the input values via the Calculator component's state when a user clicks the "reset" button
  resetValues = () => {
    this.setState({
      blood: '',
      isig: '',
      notificationClass: 'notification--hide',
      calFactor: '',
    });
  };

  // Hide the top bar notification when the user clicks on the "x" button
  hideNotification = () => {
    this.setState({
      notificationClass: 'notification--hide',
    });
  };

  // Calculator Logic
  calibrationEquation = (blood, units, isig) => {

    if (blood.length === 0) {
      this.setState({
        notificationClass: 'notification--missing',
      });
      return;
    }

    if (isig.length === 0) {
      this.setState({
        notificationClass: 'notification--missing',
      });
      return;
    }

    let bloodMgdl =  parseInt(blood);
    if (units === 'mmoll'){
      //convert to mmol/l to mg/dl using standard formula found here:
      // https://www.disabled-world.com/calculators-charts/bgl.php
      bloodMgdl = bloodMgdl * 18;
    }
    const equationResult = bloodMgdl / isig;
    const roundedResult = Math.round(equationResult * 100) / 100;

    if (equationResult >= 3 && equationResult <= 8) {
      this.setState({
        notificationClass: 'notification--accepted',
        calFactor: roundedResult,
      });
    }

    if (equationResult < 3) {
      this.setState({
        notificationClass: 'notification--rejected',
        calFactor: roundedResult,
      });
    }

    if (equationResult > 8) {
      this.setState({
        notificationClass: 'notification--rejected',
        calFactor: roundedResult,
      });
    }

    if (bloodMgdl > 400) {
      this.setState({
        notificationClass: 'notification--blood-high',
        calFactor: roundedResult,
      });
    }

    if (bloodMgdl < 40) {
      this.setState({
        notificationClass: 'notification--blood-low',
        calFactor: roundedResult,
      });
    }
  };

  render() {
    return (
      <section>
        <div className={'notification ' + this.state.notificationClass}>
          <p className="notification__text notification__text--accepted">
            <em>Cal Factor = {this.state.calFactor}</em>. Calibration will
            likely be accepted.{' '}
            <span className="emoji-icon" role="img" aria-label="Happy emoji">
              😎
            </span>
          </p>
          <p className="notification__text notification__text--rejected">
            <em>Cal Factor = {this.state.calFactor}</em>. Calibration will
            likely be rejected.{' '}
            <span className="emoji-icon" role="img" aria-label="Sad emoji">
              😞
            </span>
          </p>
          <p className="notification__text notification__text--blood-high">
            Blood glucose is too high. Treat hyperglycemia before calibrating.
          </p>
          <p className="notification__text notification__text--blood-low">
            Blood glucose is too low. Treat hypoglycemia before calibrating.
          </p>
          <p className="notification__text notification__text--missing">
            Missing data. Please be sure to enter both values.
          </p>
          <button
            className="button button--hide-notification"
            onClick={this.hideNotification}
          >
            <div className="box">&#10005;</div>
          </button>
        </div>
        <div className="calculator-container">
          <div className="calculator">
            <div className="input-container">

              <MaskedTextInput
                mask={createNumberMask({
                  decimalSymbol: '.',
                  allowDecimal: true,
                  suffix: '',
                  prefix: '',
                })}
                guide={false}
                className="input input--blood"
                name="blood"
                type="tel"
                placeholder="Blood Glucose"
                value={this.state.blood}
                onChange={event => this.setState({ blood: event.target.value })}
              />
              <select
                className="input"
                onChange={event => this.setState({ units: event.target.value })}
              >
                <option id="dgml" value="mgdl">mg/dl</option>
                <option id="mmoll" value="mmoll">mmol/l</option>
              </select>
              <MaskedTextInput
                mask={createNumberMask({
                  decimalSymbol: '.',
                  allowDecimal: true,
                  suffix: '',
                  prefix: '',
                })}
                guide={false}
                className="input input--isig"
                name="isig"
                type="tel"
                placeholder="ISIG"
                value={this.state.isig}
                onChange={event => this.setState({ isig: event.target.value })}
              />
            </div>

            <div className="button-container">
              <button
                className="button button--reset"
                name="reset"
                onClick={this.resetValues}
              >
                Reset
              </button>

              <button
                className="button button--calculate"
                name="calculate"
                onClick={() =>
                  this.calibrationEquation(this.state.blood, this.state.units, this.state.isig)}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
