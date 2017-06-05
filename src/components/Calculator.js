import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
      this.state = {
        isig : '',
        blood : '',
        notificationClass: '',
        notificationMessage: ''
      }
  }

  resetValues = () => {
    this.setState({
      blood: '',
      isig: '',
      notificationClass:'notification--hide',
      notificationMessage: ''
    });
  }

 hideNotification = () => {
   this.setState({
     notificationClass: 'notification--hide',
     notificationMessage: ''
   });
  }

  calibrationEquation = (a,b) => {

    const equationResult = a / b;

    if (equationResult >= 1.5 && equationResult <= 20 ) {
      console.log(equationResult);
      this.setState({
        notificationClass: 'notification--accepted',
        notificationMessage: 'Calibration will likely be accepted.'
      });
    }

    if (equationResult < 1.5 ) {
      console.log(equationResult);
      this.setState({
        notificationClass: 'notification--rejected',
        notificationMessage: 'Calibration will likely be rejected.'
      });
    }

    if (equationResult > 20 ) {
      console.log(equationResult);
      this.setState({
        notificationClass: 'notification--rejected',
        notificationMessage: 'Calibration will likely be rejected.'
      });
    }

    if (a.length === 0 ) {
      this.setState({
        notificationClass: 'notification--missing',
        notificationMessage: 'Missing Data. Please check that both values are entered in.'
      });
    }

    if (b.length === 0 ) {
      this.setState({
        notificationClass: 'notification--missing',
        notificationMessage: 'Missing Data. Please check that both values are entered in.'
      });
    }

  }

  render() {
    return (
      <section>
      <div id="notification" className={'notification ' + this.state.notificationClass}>
        <p className="notification-message notification-message--accepted">Calibration will likely be accepted.</p>
        <p className="notification-message notification-message--rejected">Calibration will likely be rejected.</p>
        <p className="notification-message notification-message--missing">Missing Data. Please check that both values are entered in.</p>
        <button
          className="button button--hide-notification"
          onClick={this.hideNotification}
          >X</button>
      </div>
      <div className="calculator-container">
      <div className="calculator">

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
