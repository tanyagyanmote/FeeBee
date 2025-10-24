import React from 'react';
import './style.css';
import logo from './Extras/FeeBeeLogo.png'; // adjust if needed

const Landing = () => {
  return (
    <section class="hero">
      <div id="logo-container">
        <img src={logo} id="feebeelogo" alt="FeeBee logo" />
        <p id="welcome-text">
          Know your tariff code before you buy avoid hidden fees at customs!
        </p>
      </div>
      <div class="scroll-down-inline">
        <span class="arrow">↓</span>
        <span class="text">Scroll Down</span>
        <span class="arrow">↓</span>
      </div>
    </section>
  );
};

export default Landing;
