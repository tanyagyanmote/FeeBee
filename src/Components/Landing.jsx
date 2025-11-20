import React from 'react';
import '../CSS/style.css';
// import '../CSS/Receipt.css';

import searchlogo from '../Extras/SearchLogo.png';
import HTSCodeLogo from '../Extras/HTSCodeLogo.png';
import BoxLogo from '../Extras/BoxLogo.png';
// import Receipt from './Receipt';

import bag1 from '../Extras/bags/bag1.png';
import bag2 from '../Extras/bags/bag2.png';
import bag3 from '../Extras/bags/bag3.png';

const Landing = () => {
  return (
    <>
      <section className="hero">
        {/* Top centered title */}
        <header className="hero-header">
          <h1 className="page-title">
            <span className="brand">FEE</span>
            <span className="brand accent">BEE</span>
          </h1>
          <p className="page-subtitle">
            <span className="type-line l1">
              see the real price of your dream bag
            </span>
            <span className="type-line l2 type-highlight">
              no more surprise customs fees
            </span>
          </p>
        </header>

        {/* Under the title: two columns → bags (left), receipt (right) */}
        <div className="hero-content">
          <div className="hero-left">
            <div className="bags-box">
              <div className="bag-row">
                {/* Card 1 */}
                <div className="bag-card">
                  <div className="bag-chip-row">
                    <span className="bag-chip">Italy → US</span>
                    <span className="bag-chip bag-chip-duty">Low duty</span>
                  </div>

                  <img src={bag1} alt="Vintage bag 1" className="bag-img" />

                  <p className="bag-label">Chloé Paddington</p>
                  <p className="bag-meta">Early 2000s · Leather satchel</p>

                  <div className="bag-fees">
                    <div className="bag-fee-row">
                      <span className="bag-fee-label">Item</span>
                      <span className="bag-fee-value">$1,200</span>
                    </div>
                    <div className="bag-fee-row">
                      <span className="bag-fee-label">Shipping</span>
                      <span className="bag-fee-value">$45</span>
                    </div>
                    <div className="bag-fee-row bag-fee-row-highlight">
                      <span className="bag-fee-label">Fees</span>
                      <span className="bag-fee-value">+$140 est.</span>
                    </div>
                  </div>

                  <p className="bag-note">FeeBee surfaces these before you checkout.</p>
                </div>

                {/* Card 2 */}
                <div className="bag-card bag-card-middle">
                  <div className="bag-chip-row">
                    <span className="bag-chip">France → US</span>
                    <span className="bag-chip bag-chip-duty">Medium duty</span>
                  </div>

                  <img src={bag2} alt="Vintage bag 2" className="bag-img" />

                  <p className="bag-label">Fendi Baguette</p>
                  <p className="bag-meta">Canvas · Classic shoulder</p>

                  <div className="bag-fees">
                    <div className="bag-fee-row">
                      <span className="bag-fee-label">Item</span>
                      <span className="bag-fee-value">$2,050</span>
                    </div>
                    <div className="bag-fee-row">
                      <span className="bag-fee-label">Shipping</span>
                      <span className="bag-fee-value">$55</span>
                    </div>
                    <div className="bag-fee-row bag-fee-row-highlight">
                      <span className="bag-fee-label">Fees</span>
                      <span className="bag-fee-value">+$210 est.</span>
                    </div>
                  </div>

                  <p className="bag-note">See the all-in total before you commit.</p>
                </div>

                {/* Card 3 */}
                <div className="bag-card">
                  <div className="bag-chip-row">
                    <span className="bag-chip">Japan → US</span>
                    <span className="bag-chip bag-chip-duty">Higher duty</span>
                  </div>

                  <img src={bag3} alt="Vintage bag 3" className="bag-img" />

                  <p className="bag-label">Dior Denim Saddle</p>
                  <p className="bag-meta">Early 2000s · John Galliano era</p>

                  <div className="bag-fees">
                    <div className="bag-fee-row">
                      <span className="bag-fee-label">Item</span>
                      <span className="bag-fee-value">$1,650</span>
                    </div>
                    <div className="bag-fee-row">
                      <span className="bag-fee-label">Shipping</span>
                      <span className="bag-fee-value">$60</span>
                    </div>
                    <div className="bag-fee-row bag-fee-row-highlight">
                      <span className="bag-fee-label">Fees</span>
                      <span className="bag-fee-value">+$260 est.</span>
                    </div>
                  </div>

                  <p className="bag-note">No more “mystery invoice” at your door.</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hero-right">
            <Receipt />
          </div> */}
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
