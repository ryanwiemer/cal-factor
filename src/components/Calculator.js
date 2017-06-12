import React, { Component } from 'react';
import MaskedTextInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';

class Calculator extends Component {
  constructor() {
    super()
      this.state = {
        isig : '',
        blood : '',
        notificationClass: '',
        calFactor: ''
      }
  }

  resetValues = () => {
    this.setState({
      blood: '',
      isig: '',
      notificationClass:'notification--hide',
      calFactor: ''
    });
  }

 hideNotification = () => {
   this.setState({
     notificationClass: 'notification--hide'
   });
  }

  calibrationEquation = (a,b) => {

    const equationResult = a / b;
    const roundedResult = Math.round(equationResult * 100) / 100;

    if (equationResult >= 3 && equationResult <= 8 ) {
      console.log(equationResult);
      this.setState({
        notificationClass: 'notification--accepted',
        calFactor: roundedResult
      });
    }

    if (equationResult < 3 ) {
      console.log(equationResult);
      this.setState({
        notificationClass: 'notification--rejected',
        calFactor: roundedResult
      });
    }

    if (equationResult > 8 ) {
      console.log(equationResult);
      this.setState({
        notificationClass: 'notification--rejected',
        calFactor: roundedResult
      });
    }

    if (a.length === 0 ) {
      this.setState({
        notificationClass: 'notification--missing',
        calFactor: ''
      });
    }

    if (b.length === 0 ) {
      this.setState({
        notificationClass: 'notification--missing',
        calFactor: ''
      });
    }

  }

  render() {
    return (
      <section>
      <div className={'notification ' + this.state.notificationClass}>
        <p className="notification__text notification__text--accepted"><em>Cal Factor = {this.state.calFactor}</em>. Calibration will likely be accepted. <span className="emoji-icon" role="img" aria-label="Happy emoji">😎</span></p>
        <p className="notification__text notification__text--rejected"><em>Cal Factor = {this.state.calFactor}</em>. Calibration will likely be rejected. <span className="emoji-icon" role="img" aria-label="Sad emoji">😞</span></p>
        <p className="notification__text notification__text--missing">Missing data. Please be sure to enter both values.</p>
        <button
          className="button button--hide-notification"
          onClick={this.hideNotification}
          >
          <div className="box">
            &#10005;
          </div>
          </button>
      </div>
      <div className="calculator-container">
      <div className="calculator">
          <div className="input-container">
            <MaskedTextInput
              mask={[/[1-9]/,/[1-9]/,/[1-9]/,/[1-9]/]}
              guide="false"
              className="input input--blood"
              name="blood"
              type="text"
              placeholder="Blood Glucose"
              value = {this.state.blood}
              onChange={(event) => this.setState({ blood: event.target.value })}
            />
            <MaskedTextInput
              mask={[/[1-9]/,/[1-9]/,/[1-9]/,/[1-9]/]}
              className="input input--isig"
              name="isig"
              type="text"
              placeholder="ISIG"
              value = {this.state.isig}
              onChange={(event) => this.setState({ isig: event.target.value })}
            />
          </div>

          <div className="button-container">
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
      </div>
    </section>
    );
  }
}

export default Calculator;
