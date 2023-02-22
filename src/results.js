import React from "react";

function ResultsPage({ scores, totalQuestions }) {
  const [firstrender, setFirstRender] = React.useState(true);
  const [multipleMax, setMultipleMax] = React.useState(false);
  const [maxIndex, setMaxIndex] = React.useState(0);
  const [otherMaxIndex, setOtherMaxIndex] = React.useState([]);

  const findMaxScore = () => {
    setFirstRender(false);
    var locmax = 0;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > locmax) {
        locmax = scores[i];
        setMaxIndex(i);
      }
      else if(scores[i] === locmax){
        setMultipleMax(true);
        setOtherMaxIndex([...otherMaxIndex, i+1]);
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
      {maxIndex === 0 ? (<p>FE1 : Fire Emblem Shadow Dragon and the Blade of Light</p>) : null}
      {maxIndex === 1 ? (<p>FE2 : Fire Emblem Gaiden</p>) : null}
      {maxIndex === 2 ? (<p>FE3 : Fire Emblem Mystery of the Emblem</p>) : null}
      {maxIndex === 3 ? (<p>FE4 : Fire Emblem Geneology of the Holy War</p>) : null}
      {maxIndex === 4 ? (<p>FE5 : Fire Emblem Thracia 776</p>) : null}
      {maxIndex === 5 ? (<p>FE6 : Fire Emblem The Binding Blade</p>) : null}
      {maxIndex === 6 ? (<p>FE7 : Fire Emblem</p>) : null}
      {maxIndex === 7 ? (<p>FE8 : Fire Emblem Sacred Stones</p>) : null}
      {maxIndex === 8 ? (<p>FE9 : Fire Emblem Path of Radiance</p>) : null}
      {maxIndex === 9 ? (<p>FE10 : Fire Emblem Radiant Dawn</p>) : null}
      {maxIndex === 10 ? (<p>FE11 : Fire Emblem Shadow Dragon</p>) : null}
      {maxIndex === 11 ? (<p>FE12 : Fire Emblem New Mystery of the Emblem</p>) : null}
      {maxIndex === 12 ? (<p>FE13 : Fire Emblem Awakening</p>) : null}
      {maxIndex === 13 ? (<p>FE14 : Fire Emblem Fates</p>) : null}
      {maxIndex === 14 ? (<p>FE15 : Fire Emblem Echoes: Shadows of Valentia</p>) : null}
      {maxIndex === 15 ? (<p>FE16 : Fire Emblem Three Houses</p>) : null}
      {maxIndex === 16 ? (<p>FE17 : Fire Emblem Engage</p>) : null}
      <a href={url()}>{url()}</a>
      {multipleMax ? otherRecs() : null}
    </div>
  );
}

export default ResultsPage;
