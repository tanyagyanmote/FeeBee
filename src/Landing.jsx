import React from 'react';
import './style.css';
import logo from './Extras/FeeBeeLogo.png'; // adjust path if needed
import searchlogo from './Extras/SearchLogo.png'; // adjust path if needed
import HTSCodeLogo from './Extras/HTSCodeLogo.png'; // adjust path if needed
import BoxLogo from './Extras/BoxLogo.png'; // adjust path if needed

const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div id="logo-container">
          <img src={logo} id="feebeelogo" alt="FeeBee logo" />
          <p id="welcome-text">
            Know your tariff code before you buy — avoid hidden fees at customs!
          </p>
        </div>
        <div className="scroll-down-inline">
          <span className="arrow">↓</span>
          <span className="text">Scroll Down</span>
          <span className="arrow">↓</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works!</h2>
        <div className="steps">
          <div className="step">
            <div className="icon-wrap">
              <img src={searchlogo} alt="Search" className="plain-icon" />
            </div>
            <p>Type what you’re buying</p>
          </div>

          <div className="step">
            <div className="icon-wrap">
              <img src={HTSCodeLogo} alt="HTS code" className="plain-icon" />
            </div>
            <p>FeeBee suggests the right HTS code</p>
          </div>

          <div className="step">
            <div className="icon-wrap">
              <img src={BoxLogo} alt="Share code" className="plain-icon" />
            </div>
            <p>Give it to your seller to avoid surprise fees</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;

