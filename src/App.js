import React from 'react';
import Landing from './Landing';
import FAQ from './FAQ';
import LearnMore, { LearnArticles } from "./LearnMore";

function App() {
  return (
    <div className="App">
      <Landing />
      <FAQ />
      <LearnMore />
      <LearnArticles />
    </div>
  );
}

export default App;
