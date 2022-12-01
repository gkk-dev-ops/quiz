// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import QuizHeader from './components/QuizHeader'
import QuizQuestion from './components/QuizQuestions'

const qb={
  "questions":[
    {
      "q":"This is a question one?",
      "a":"answer a",
      "b":"answer b",
      "c":"answer c",
      "correct":"a"
    },
    {
      "q":"This is a question two?",
      "a":"answer a",
      "b":"answer b",
      "c":"answer c",
      "correct":"b"
  },]
  }

function App() {
  const[state, setState]=useState(0);
  return (
    <div className="App">
     <QuizHeader
     currentPoints={state}
     />
     <QuizQuestion
     questionBase={qb}
     points={state}
     pointsSetter={setState}
     />
    </div>
  );
}

export default App;
