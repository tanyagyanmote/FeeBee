import "./learn-more.css";

export default function LearnMore() {
  return (
    <section className="learn">
      <div className="learn__inner">
        <h2>Learn More</h2>

        <div className="learn__grid">
          <a className="learn__card" href="#confusing-cats">
            <span>Top 10 Most Confusing Import Categories</span>
          </a>

          <a className="learn__card learn__card--highlight" href="#ask-seller">
            <span>How to Ask a Seller for the Right Code</span>
          </a>

          <a className="learn__card" href="#customs-2025">
            <span>What to Know About Customs in 2025</span>
          </a>
        </div>
      </div>
    </section>
  );
}
