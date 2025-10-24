import React from 'react';
import './style.css';
import logo from './Extras/FeeBeeLogo.png'; // adjust if needed

const Landing = () => {
  return (
    <div id="logo-container">
      <img src={logo} id="feebeelogo" alt="FeeBee logo" />
    </div>
  );
};

export default Landing;
