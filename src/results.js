import React from "react";

function ResultsPage({ scores, totalQuestions }) {
  const [firstrender, setFirstRender] = React.useState(true);
  const [multipleMax, setMultipleMax] = React.useState(false);
  const [max, setMax] = React.useState(0);
  const [maxIndex, setMaxIndex] = React.useState(0);
  const [otherMaxIndex, setOtherMaxIndex] = React.useState([]);
  const findMaxScore = () => {
    setFirstRender(false);

    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > max) {
        setMax(scores[i]);
        setMaxIndex(i);
      }
      else if(scores[i] === max){
        setMultipleMax(true);
        setOtherMaxIndex(...otherMaxIndex, i+1);
      }
    }

    };

  

  if (firstrender) { findMaxScore(); }
  const otherRecs = () => {
    return (
        <div>
            <p>Other recommendations:</p>
            <ul>{otherMaxIndex.map((index) => <li>FE{index}</li>)}</ul>
        </div>
    )
  }

  const url = () => {
    var url = "https://www.google.com/search?q=";
    url += "fire+emblem+";
    url += (maxIndex + 1);
    return url;
  }
  return (
    <div className="results-page-container">
      <h1>Quiz Results</h1>
      <p>You should try:</p>
      {maxIndex === 0 ? (<p>FE1</p>) : null}
      {maxIndex === 1 ? (<p>FE2</p>) : null}
      {maxIndex === 2 ? (<p>FE3</p>) : null}
      {maxIndex === 3 ? (<p>FE4</p>) : null}
      {maxIndex === 4 ? (<p>FE5</p>) : null}
      {maxIndex === 5 ? (<p>FE6</p>) : null}
      {maxIndex === 6 ? (<p>FE7</p>) : null}
      {maxIndex === 7 ? (<p>FE8</p>) : null}
      {maxIndex === 8 ? (<p>FE9</p>) : null}
      {maxIndex === 9 ? (<p>FE10</p>) : null}
      {maxIndex === 10 ? (<p>FE11</p>) : null}
      {maxIndex === 11 ? (<p>FE12</p>) : null}
      {maxIndex === 12 ? (<p>FE13</p>) : null}
      {maxIndex === 13 ? (<p>FE14</p>) : null}
      {maxIndex === 14 ? (<p>FE15</p>) : null}
      {maxIndex === 15 ? (<p>FE16</p>) : null}
      {maxIndex === 16 ? (<p>FE17</p>) : null}
      <a href="url">{url()}</a>
      {multipleMax ? otherRecs() : null}
    </div>
  );
}

export default ResultsPage;
