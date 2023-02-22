import React, { useState } from 'react';
import './quiz.css';
import ResultsPage from './results';
import TitlePage from './titlepage';

function Quiz() {
  // Define quiz questions and possible answers
  const [showTitlePage, setShowTitlePage] = useState(true);
  const [questions] = useState([
    {
      id: 0,
      question: "How old are you?",
      options: [
        { id: 0, text: "36+", 
            fe1: 1, fe2: 2, fe3: 1, fe4: 1, fe5: 1, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 0},
        { id: 1, text: "25-35", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 1, fe7: 2, fe8: 1, fe9: 1, fe10: 1, fe11: 1, fe12: 1, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 0 },
        { id: 2, text: "17-25", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 1, fe12: 1, fe13: 2, fe14: 1, fe15: 1,fe16: 1, fe17: 1 },
        { id: 3, text: "<16",
           fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 1, fe14: 1, fe15: 1,fe16: 0, fe17: 2 }
      ]
    },
    {
      id: 1,
      question: "Do you like anime?",
      options: [
        { id: 0, text: "Yes", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 1, fe14: 1, fe15: 0,fe16: 1, fe17: 2 },
        { id: 1, text: "No", 
            fe1: 1, fe2: 1, fe3: 1, fe4: 2, fe5: 1, fe6: 1, fe7: 1, fe8: 1, fe9: 1, fe10: 1, fe11: 1, fe12: 1, fe13: 0, fe14: 0, fe15: 1,fe16: 0, fe17: 0 },
      ]
    },
    {
        id: 2,
        question: "How important is a good story to you in a game?",
        options: [
        { id: 0, text: "Very Important", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 1, fe5: 0, fe6: 0, fe7: 0, fe8: 1, fe9: 1, fe10: 1, fe11: 0, fe12: 0, fe13: 1, fe14: 0, fe15: 1,fe16: 2, fe17: 0},
        { id: 1, text: "Meh", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 2, fe6: 1, fe7: 1, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 1, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 1 },
        { id: 2, text: "I do not care",
           fe1: 1, fe2: 1, fe3: 1, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 1, fe12: 0, fe13: 0, fe14: 2, fe15: 0,fe16: 0, fe17: 0}
        ]
    },
    {
        id: 3,
        question: "How important is gameplay (in general) to you in a game?",
        options: [
        { id: 0, text: "I would hope the game that I am playing is enjoyable", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 1, fe6: 0, fe7: 1, fe8: 1, fe9: 1, fe10: 0, fe11: 0, fe12: 1, fe13: 0, fe14: 1, fe15: 1,fe16: 1, fe17: 2},
        { id: 1, text: "I just like the funny pictures", 
            fe1: 1, fe2: 0, fe3: 1, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 1, fe11: 1, fe12: 0, fe13: 2, fe14: 0, fe15: 0,fe16: 0, fe17: 0 },
        { id: 2, text: "Story only. No game.",
           fe1: 0, fe2: 1, fe3: 0, fe4: 1, fe5: 0, fe6: 0, fe7: 0, fe8: 2, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 0}
        ]
    },
    {
        id: 4,
        question: "How important is CHALLENGING gameplay to you in a game?",
        options: [
        { id: 0, text: "Very Important", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 2, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 1, fe11: 0, fe12: 0, fe13: 0, fe14: 1, fe15: 0,fe16: 1, fe17: 0},
        { id: 1, text: "Meh", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 1, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 1, fe12: 0, fe13: 2, fe14: 0, fe15: 1,fe16: 0, fe17: 1 },
        { id: 2, text: "I do not care",
           fe1: 1, fe2: 1, fe3: 1, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 1, fe13: 0, fe14: 1, fe15: 0,fe16: 0, fe17: 0}
        ]
    },
    {
        id: 5,
        question: "Have you played FE before?",
        options: [
        { id: 0, text: "Yes, 4+ games", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 2, fe5: 1, fe6: 0, fe7: 0, fe8: 1, fe9: 1, fe10: 1, fe11: 0, fe12: 0, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 0},
        { id: 1, text: "Yes, 1-3 games", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 1, fe14: 0, fe15: 2,fe16: 1, fe17: 1},
        { id: 2, text: "Nope",
           fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 2, fe14: 0, fe15: 1,fe16: 0, fe17: 0}
        ]
    },
    {
        id: 6,
        question: "Do you enjoy plotlines that have a weird amount of incest in them (this question is relevant i swear)",
        options: [
        { id: 0, text: "Yes (there is something wrong with me)", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 1, fe5: 0, fe6: 0, fe7: 0, fe8: 1, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 0, fe14: 2, fe15: 0,fe16: 0, fe17: 0},
        { id: 1, text: "No (i'm a functioning member of society)", 
            fe1: 1, fe2: 1, fe3: 1, fe4: 0, fe5: 1, fe6: 1, fe7: 1, fe8: 0, fe9: 1, fe10: 1, fe11: 1, fe12: 1, fe13: 1, fe14: 0, fe15: 1,fe16: 0, fe17: 1}
        ]
    },
    {
        id: 7,
        question: "Do you like games with self-inserts (avatars)?",
        options: [
        { id: 0, text: "Yes", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 0, fe7: 1, fe8: 0, fe9: 0, fe10: 0, fe11: 1, fe12: 1, fe13: 2, fe14: 1, fe15: 0,fe16: 1, fe17: 1},
        { id: 1, text: "No", 
            fe1: 1, fe2: 1, fe3: 1, fe4: 1, fe5: 1, fe6: 1, fe7: 0, fe8: 1, fe9: 1, fe10: 1, fe11: 0, fe12: 0, fe13: 0, fe14: 0, fe15: 1,fe16: 0, fe17: 0}
        ]
    },
    {
        id: 8,
        question: "Do you like romance options in games?",
        options: [
        { id: 0, text: "Yes", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 1, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 2, fe14: 1, fe15: 0,fe16: 1, fe17: 1},
        { id: 1, text: "Yes, but only if the romance technically occurs after the game is over", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 1, fe7: 2, fe8: 1, fe9: 0, fe10: 1, fe11: 0, fe12: 0, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 0},
        { id: 2, text: "No", 
            fe1: 1, fe2: 1, fe3: 1, fe4: 0, fe5: 1, fe6: 0, fe7: 0, fe8: 0, fe9: 1, fe10: 0, fe11: 1, fe12: 1, fe13: 0, fe14: 0, fe15: 2,fe16: 0, fe17: 0}
        ]
    },
    {
        id: 9,
        question: "Do you prefer nice graphics/ a good artstyle(not necessarily modern, but enjoyable to look at)?",
        options: [
        { id: 0, text: "Yes", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 0, fe5: 0, fe6: 1, fe7: 1, fe8: 1, fe9: 1, fe10: 1, fe11: 1, fe12: 1, fe13: 0, fe14: 0, fe15: 2,fe16: 1, fe17: 0},
        { id: 1, text: "Meh", 
            fe1: 0, fe2: 0, fe3: 0, fe4: 1, fe5: 1, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 1, fe14: 1, fe15: 0,fe16: 0, fe17: 1},
        { id: 2, text: "No, i hate my eyes", 
            fe1: 2, fe2: 1, fe3: 1, fe4: 0, fe5: 0, fe6: 0, fe7: 0, fe8: 0, fe9: 0, fe10: 0, fe11: 0, fe12: 0, fe13: 0, fe14: 0, fe15: 0,fe16: 0, fe17: 0}
        ]
    }
    
  ]);
  
  // Define state to keep track of user's selected answers and score
  const [userAnswers, setUserAnswers] = useState([]);
  const [scores, setScores] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  //state for current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle selecting an answer
  const handleSelectAnswer = (questionId, answerId, fe1,fe2,fe3,fe4,fe5,fe6,fe7,fe8,fe9,fe10,fe11,fe12,fe13,fe14,fe15,fe16,fe17) => {
    const userAnswer = { questionId, answerId, fe1,fe2,fe3,fe4,fe5,fe6,fe7,fe8,fe9,fe10,fe11,fe12,fe13,fe14,fe15,fe16,fe17};
    setUserAnswers([...userAnswers, userAnswer]);


    const newscores = [scores[0] + fe1, scores[1] + fe2, scores[2] + fe3, scores[3] + fe4, scores[4] + fe5, scores[5] + fe6, scores[6] + fe7, scores[7] + fe8, scores[8] + fe9, scores[9] + fe10, scores[10] + fe11, scores[11] + fe12, scores[12] + fe13, scores[13] + fe14, scores[14] + fe15, scores[15] + fe16, scores[16] + fe17]
    setScores(newscores);
  };
  const [selectedRadio, setRadio] = useState(0);

  // Render each quiz question and its possible answers
  const renderQuestions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h3>{currentQuestion.question}</h3>
        <form>
          {currentQuestion.options.map(answer => (
            <div key={answer.id}>
              <input
                type="radio"
                id={answer.id}
                name={`question-${currentQuestion.id}`}
                fe1 = {answer.fe1}
                fe2 = {answer.fe2}
                fe3 = {answer.fe3}
                fe4 = {answer.fe4}
                fe5 = {answer.fe5}
                fe6 = {answer.fe6}
                fe7 = {answer.fe7}
                fe8 = {answer.fe8}
                fe9 = {answer.fe9}
                fe10 = {answer.fe10}
                fe11 = {answer.fe11}
                fe12 = {answer.fe12}
                fe13 = {answer.fe13}
                fe14 = {answer.fe14}
                fe15 = {answer.fe15}
                fe16 = {answer.fe16}
                fe17 = {answer.fe17}
                checked={(selectedRadio === answer.id)}
                onChange={() => (console.log(setRadio(answer.id)))}
              />
              <label htmlFor={answer.id}>{answer.text}</label>
            </div>
          ))}
        </form>
      </div>
    );
  };
  
  const startQuiz = () => {
    setShowTitlePage(false);
  };
  const handleClick = () => {
    handleSelectAnswer(questions[currentQuestionIndex].id, questions[currentQuestionIndex].options[selectedRadio].id, questions[currentQuestionIndex].options[selectedRadio].fe1, questions[currentQuestionIndex].options[selectedRadio].fe2, questions[currentQuestionIndex].options[selectedRadio].fe3, questions[currentQuestionIndex].options[selectedRadio].fe4, questions[currentQuestionIndex].options[selectedRadio].fe5, questions[currentQuestionIndex].options[selectedRadio].fe6, questions[currentQuestionIndex].options[selectedRadio].fe7, questions[currentQuestionIndex].options[selectedRadio].fe8, questions[currentQuestionIndex].options[selectedRadio].fe9, questions[currentQuestionIndex].options[selectedRadio].fe10, questions[currentQuestionIndex].options[selectedRadio].fe11, questions[currentQuestionIndex].options[selectedRadio].fe12, questions[currentQuestionIndex].options[selectedRadio].fe13, questions[currentQuestionIndex].options[selectedRadio].fe14, questions[currentQuestionIndex].options[selectedRadio].fe15, questions[currentQuestionIndex].options[selectedRadio].fe16, questions[currentQuestionIndex].options[selectedRadio].fe17)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if(showTitlePage){
    return (
      <div>
        <TitlePage startQuiz={startQuiz}/>
      </div>
    );
  }
  else if(currentQuestionIndex < questions.length){
    return (
    <div className="quiz-container">
        <h1>Personality Quiz</h1>
        {renderQuestions()}
        {(
            <button onClick={() => handleClick()}>
            Next
            </button>
        )}
    </div>
    )
  }
  else{  
    return (
    <div className="quiz-container">
        <ResultsPage scores={scores} totalQuestions={questions.length} />
    </div>
    )
  }
  
}
export default Quiz;