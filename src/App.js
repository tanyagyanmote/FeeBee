import React from 'react';
import Landing from './Components/Landing';
import FAQ from './Components/FAQ';
import LearnMore, { LearnArticles } from "./Components/LearnMore";

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
