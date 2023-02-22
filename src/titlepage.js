import React from "react";
import './titlepage.css'

function TitlePage({ startQuiz }) {
  return (
    <div className="title-page-container">
      <h1>What Fire Emblem Game Should You Play?</h1>
      <p>
        It's like a dumb low effort buzzfeed quiz, but I programmed it.
      </p>
      <button onClick={() => startQuiz()}>Start Quiz</button>
    </div>
  );
}

export default TitlePage;
