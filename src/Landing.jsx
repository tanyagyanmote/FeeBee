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
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
        <div className="step">1. Type your item</div>
        <div className="step">2. FeeBee suggests the right HTS code</div>
        <div className="step">3. Share it with your seller</div>
        </div>
        </section>


        <section className="faq">
        <h3>FAQs</h3>
        <div className="faq-item">What is an HTS code?</div>
        <div className="faq-item">Why does it matter?</div>
        <div className="faq-item">Does FeeBee guarantee no import duties?</div>
        </section>


        <section className="resources">
        <h3>Learn More</h3>
        <div className="blog-card">Top 10 Most Confusing Import Categories</div>
        <div className="blog-card">How to Ask a Seller for the Right Code</div>
        </section>
    </section>
  );
};

export default Landing;
