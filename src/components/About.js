import React, { Component } from 'react';
require('smoothscroll-polyfill').polyfill();

class About extends Component {

  scrollToAbout() {
    document.querySelector('.about').scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">Cal Factor Calculator</h1>
        <button
          className="button button--about"
          name="learn more"
          onClick={this.scrollToAbout}>
          Learn More
        </button>
        <section id="about" className="about">
          <h2>About</h2>
          <p>The <em>Cal Factor Calculator</em> is a simple app intended to help Medtronic MiniMed insulin pump users calibrate their CGM sensors. Please note that the medical equipment itself is obviously more sophisticated and takes into account additional variables including your sensor's history. This app will help you calculate your &quot;cal factor&quot; and warn you about the most obvious of errors. To report an issue or request a feature please visit the <a href="https://github.com/ryanwiemer/cal-factor" target="_blank">GitHub repository</a>.</p>
          <h3>Calibration Factor Equation</h3>
          <code><em>Cal Factor</em> = (Blood Glucose &divide; Interstitial Signal)</code>
          <h3>Useful Tips</h3>
          <ul>
            <li>Blood glucose must be between 40 - 400 or the calibration will be rejected. <a href="https://www.medtronicdiabetes.com/customer-support/sensors-and-transmitters-support/calibration-sensor" target="_blank">(source)</a></li>
            <li>Cal factor should be between 3 - 8 or the calibration will likely be rejected. </li>
            <li>Wait 15 minutes between calibrations.  <a href="https://www.medtronicdiabetes.com/customer-support/sensors-and-transmitters-support/troubleshoot-sensor" target="_blank">(source)</a></li>
            <li>Do not calibrate if your blood glucose is rapidly rising or lowering. <a href="https://www.medtronicdiabetes.com/customer-support/sensors-and-transmitters-support/calibration-sensor" target="_blank">(source)</a></li>
            <li>Your first couple of calibrations are the most important. Make sure the first ones are stable.</li>
            <li>Hydration can potentially impact the accuracy of your ISIG value. Make sure you are not dehydrated when calibrating.</li>
            <li>Experiences will very from person to person. Although this app doesn't guarantee success hopefully it will help you avoid the unnecessary &quot;Cal Error&quot; warning.</li>
          </ul>
          <h3><span className="emoji-image" role="img" aria-label="Warning emoji">⚠️</span> Disclaimer</h3>
          <p>This website is not intended to serve as formal medical advice. Please consult your doctor regarding your health. For specific technical assistance with your insulin pump or CGM sensor contact the device manufacture. This website is not in any way affiliated with Medtronic MiniMed.</p>
          <p><em>Last updated:</em> June, 2017.</p>
        </section>
      </div>
    );
  }
}

export default About;
