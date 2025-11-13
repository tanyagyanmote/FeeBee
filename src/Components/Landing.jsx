import React from 'react';
import '../CSS/style.css';
import '../CSS/Receipt.css';
import logo from '../Extras/FeeBeeLogo.png';
import searchlogo from '../Extras/SearchLogo.png';
import HTSCodeLogo from '../Extras/HTSCodeLogo.png';
import BoxLogo from '../Extras/BoxLogo.png';
import Receipt from './Receipt';
import bag1 from '../Extras/bags/bag1.png';
import bag2 from '../Extras/bags/bag2.png';
import bag3 from '../Extras/bags/bag3.png';

const Landing = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-left-inner">
              <div className="logo-box">
                <img src={logo} id="feebeelogo" alt="FeeBee logo" />
                <p id="welcome-text">
                  See the <span className="underline">real price</span> of your dream bag
                  before you buy — no more surprise customs fees.
                </p>
              </div>
              <div className="bags-box">
                <div className="bag-row">
                  <div className="bag-card">
                    <img src={bag1} alt="Vintage bag 1" className="bag-img" />
                    <p className="bag-label">Chloe Paddington</p>
                    <p className="bag-meta">Italy → US · Example</p>
                  </div>

                  <div className="bag-card bag-card-middle">
                    <img src={bag2} alt="Vintage bag 2" className="bag-img" />
                    <p className="bag-label">Fendi Baguette</p>
                    <p className="bag-meta">France → US · Example</p>
                  </div>

                  <div className="bag-card">
                    <img src={bag3} alt="Vintage bag 3" className="bag-img" />
                    <p className="bag-label">Dior Denim Saddle </p>
                    <p className="bag-meta">Japan → US · Example</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="hero-right">
            <Receipt />
          </div>
        </div>

        {/* <div className="scroll-down-inline">
          <span className="arrow">↓</span>
          <span className="text">Scroll Down</span>
          <span className="arrow">↓</span>
        </div> */}
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
