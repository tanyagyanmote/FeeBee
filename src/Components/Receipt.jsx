import React from "react";
import "../CSS/Receipt.css";

const items = [
  { id: 1, name: "Dior Denim Saddle Bag (item price)", price: 1200.0 },
  { id: 2, name: "International shipping", price: 45.0 },
  { id: 3, name: "Estimated customs & tariffs", price: 120.0 },
  { id: 4, name: "Carrier handling fees", price: 18.0 },
];

// approx local sales tax on top of everything
const taxAmount = 110.0;

// subtotal of all line items
const subtotal = items.reduce((sum, item) => sum + item.price, 0);

// final total: item + shipping + customs/tariffs + carrier fees + tax
const total = subtotal + taxAmount;

const Receipt = () => {
  return (
    <div className="receipt-wrapper">
      <div className="receipt">
        <header className="receipt-header">
          <h1 className="receipt-title">ESTIMATE</h1>
          <div className="receipt-meta">
            <span>Italy → USA</span>
            <span>Dior Denim Saddle</span>
            <span>Example breakdown</span>
          </div>
        </header>

        <hr className="receipt-divider" />

        <section className="receipt-body">
          {items.map((item, index) => (
            <div className="receipt-row" key={item.id}>
              <div className="receipt-left">
                <span className="receipt-index">{index + 1}.</span>
                <span className="receipt-item">{item.name}</span>
              </div>
              <span className="receipt-price">
                ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </section>

        <div className="receipt-footer">
          <div className="receipt-row">
            <span className="receipt-label">Estimated sales tax</span>
            <span className="receipt-price">
              ${taxAmount.toFixed(2)}
            </span>
          </div>
          <div className="receipt-row receipt-total-row">
            <span className="receipt-label total-label">TOTAL:</span>
            <span className="receipt-price total-price">
              $
              {total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        <div className="receipt-code">
          Example only – actual customs may vary
        </div>
      </div>
    </div>
  );
};

export default Receipt;
