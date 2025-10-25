import "./learn-more.css";

/** Single source of truth: cards + article content */
export const LEARN_ARTICLES = [
  {
    id: "confusing-cats",
    title: "Top 10 Most Confusing Import Categories",
    highlight: false,
    body: (
      <>
        <p>Some categories look similar but classify differently based on material, construction, or use. Here are the common traps and what to ask to pick the right code.</p>
        <ul>
          <li><strong>Footwear (64):</strong> upper/sole material, protective toe, sports vs casual.</li>
          <li><strong>Bags (4202):</strong> outer surface (leather, plastic sheeting, textile), type (handbag vs backpack).</li>
          <li><strong>Apparel:</strong> knit vs woven, fiber %, garment type.</li>
          <li><strong>Electronics:</strong> principal function, comms capability.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ask-seller",
    title: "How to Ask a Seller for the Right Code",
    highlight: true,
    body: (
      <>
        <p>Use a short checklist in your message so the seller gives you the details customs actually needs:</p>
        <ol>
          <li>Exact material(s) and fiber % (if textile).</li>
          <li>How it’s made (knit/woven, molded, etc.).</li>
          <li>Intended use / principal function.</li>
          <li>Any special features (protective toe, lined, rechargeable, etc.).</li>
          <li>Link to a similar ruling if you have one.</li>
        </ol>
        <p>Then propose a candidate HTS and ask them to confirm or correct.</p>
      </>
    ),
  },
  {
    id: "customs-2025",
    title: "What to Know About Customs in 2025",
    highlight: false,
    body: (
      <>
        <p>Rates and programs change. Watch for:</p>
        <ul>
          <li>Country-specific surcharges/retaliatory duties.</li>
          <li>Free-trade program eligibility (e.g., USMCA) and paperwork.</li>
          <li>Carrier advancement/processing fees and how they’re calculated.</li>
        </ul>
        <p>Always keep your tariff text and rates up to date in the app.</p>
      </>
    ),
  },
];

export default function LearnMore() {
  return (
    <section className="learn">
      <div className="learn__inner">
        <h2>Learn More</h2>

        <div className="learn__grid">
          {LEARN_ARTICLES.map((a) => (
            <a
              key={a.id}
              className={`learn__card ${a.highlight ? "learn__card--highlight" : ""}`}
              href={`#${a.id}`}
            >
              <span>{a.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Render the article sections somewhere below <LearnMore /> */
export function LearnArticles() {
  return (
    <section className="learn-articles">
      {LEARN_ARTICLES.map((a) => (
        <article key={a.id} id={a.id} className="learn-article">
          <h3>{a.title}</h3>
          <div className="learn-article__body">{a.body}</div>
          <a className="learn-article__back" href="#top">Back to top ↑</a>
        </article>
      ))}
    </section>
  );
}
