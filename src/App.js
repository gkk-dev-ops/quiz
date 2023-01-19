// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import QuizHeader from './components/QuizHeader'
import QuizQuestion from './components/QuizQuestions'

import qb from './questions.json'

const QUESTIONS_DB_URL = 'http://localhost:3000'

function App() {

  const[state, setState]=useState(0);
  const[questionIndex, questionIndexSetter]=useState(0);
  
  return (
    <div className="App">
      <QuizHeader
      currentPoints={state}
      amountOfQuestions={qb.length}
      questionIndex={questionIndex}
      />
      <QuizQuestion
      questionBase={qb}
      questionIndex={questionIndex}
      questionIndexSetter={questionIndexSetter}
      points={state}
      pointsSetter={setState}
      />
    </div>
  );
}

export default App;
