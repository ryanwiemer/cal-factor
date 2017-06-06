import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <button className="button button--about">About</button>
        <section className="about">
          <h2>About</h2>
          <p>The Cal Factor calculator is a very simple app intended to help Medtronic Minimed insulin pump users calibrate their CGM sensors. The word 'help' is used because the medical equipment itself is much more sophisticated and takes into account other variables such as your sensor's history which this app does not know. At it's core this app will help you calculate your 'cal factor' and warn you about the most obvious of errors.</p>
          <h3>Cal Factor Equation</h3>
          <code><em>Cal Factor</em> = Blood Glucose &divide; ISIG</code>
          <h3>Useful Tips</h3>
          <ul>
            <li>Blood glucose must be between 40 - 400 or it will not be accepted.</li>
            <li>Cal Factor must be between 3 - 8 or it will not be accepted. </li>
            <li>Do not calibrate if your blood glucose is rapidly rising or lowering.</li>
            <li>Your first calibration is the most important. Make sure the first one is as stable as possible.</li>
            <li>Hydration can potentially impact the accuracy of your ISIG value. Make sure you are not dehydrated when calibrating.</li>
          </ul>
          <h3><span className="emoji-image" role="img" aria-label="Warning emoji">⚠️</span> Dislaimer</h3>
          <p>This website is not intended to serve as formal medical advice. Please consult your doctor regarding your health. For specific technical assistance with your pump or CGM sensor contact the device manufacture. This website is not in any way affiliated with Medtronic Minimed. To report an issue please visit the <a href="https://github.com/ryanwiemer/isig">GitHub repository</a>.</p>
        </section>
      </div>
    );
  }
}

export default About;
