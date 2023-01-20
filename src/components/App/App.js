import './App.css';
import React, {useState} from 'react';
import Masthead from '../Masthead/Masthead'
import Questions from '../Questions/Questions'

import qb from '../../questions.json'

const QUESTIONS_DB_URL = 'http://localhost:3001'

function App() {

  const[state, setState]=useState(0);
  const[questionIndex, questionIndexSetter]=useState(0);
  
  return (
    <div className="App">
      <Masthead
      currentPoints={state}
      amountOfQuestions={qb.length}
      questionIndex={questionIndex}
      />
      <Questions
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
