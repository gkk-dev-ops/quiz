// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import QuizHeader from './components/QuizHeader'
import QuizQuestion from './components/QuizQuestions'

const qb={
  "questions":[
    {
      "q":"This is a question one?",
      "a":"answer a: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore laboriosam voluptatem sunt officiis mollitia.",
      "b":"answer b: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore laboriosam voluptatem sunt officiis mollitia",
      "c":"answer c: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore laboriosam voluptatem sunt officiis mollitia",
      "correct":"a"
    },
    {
      "q":"This is a question two?",
      "a":"answer a: e inventore laboriosam voluptatem sunt officiis mollitia.",
      "b":"answer b",
      "c":"answer c",
      "correct":"b"
  },]
  }

function App() {
  const[state, setState]=useState(0);
  const[questionIndex, questionIndexSetter]=useState(0);
  return (
    <div className="App">
     <QuizHeader
     currentPoints={state}
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
