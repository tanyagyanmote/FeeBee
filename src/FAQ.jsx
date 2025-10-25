import { useEffect, useRef, useState } from "react";
import "./faq.css";

export default function FAQ() {
  const QA = [
    {
      q: "Why does the code matter?",
      a: "The correct HTS/HS code determines duty rate, taxes, and compliance checks. A wrong code can cause overpaying, delays, or penalties."
    },
    {
      q: "What is an HTS code anyway?",
      a: "It’s a standardized classification for goods used by customs. The first 6 digits are global (HS); destination countries add digits for local tariffs."
    },
    {
      q: "Does FeeBee guarantee no fees?",
      a: "No tool can promise zero fees. When your HTS code is correct, clearance is faster and you avoid rework. Carriers like DHL often advance duties/taxes to customs and add a small processing fee (typically about $17 in the US, or 2% of the advanced amount, min $17). Having the right code helps you clear quickly and keep those costs predictable."
    }
  ];

  const [openIdx, setOpenIdx] = useState(-1);
  const itemRefs = useRef([]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!itemRefs.current.some((el) => el && el.contains(e.target))) {
        setOpenIdx(-1);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function onKeyDown(e) {
    if (e.key === "Escape") setOpenIdx(-1);
  }

  return (
    <section className="faq" onKeyDown={onKeyDown}>
      <h2>FAQ</h2>

      <div className="faq-grid">
        {QA.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIdx === i ? "open" : ""} ${
              i === 2 ? "faq-item--full" : ""
            }`}
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <button
              className="faq-q"
              aria-expanded={openIdx === i}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              onClick={(e) => {
                e.stopPropagation();
                setOpenIdx((cur) => (cur === i ? -1 : i));
              }}
            >
              {item.q}
            </button>

            <div
              role="region"
              id={`faq-panel-${i}`}
              aria-labelledby={`faq-button-${i}`}
              className="faq-answer"
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
