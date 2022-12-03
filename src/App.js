// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import QuizHeader from './components/QuizHeader'
import QuizQuestion from './components/QuizQuestions'
import qb from './questions.json'

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


// const qb={
//   "questions":[
//       {
//         "Q":"This is a question one?",
//         "A":"answer a: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore laboriosam voluptatem sunt officiis mollitia.",
//         "B":"answer b: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore laboriosam voluptatem sunt officiis mollitia",
//         "C":"answer c: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore laboriosam voluptatem sunt officiis mollitia",
//         "correct":"A"
//       },
//       {
//         "Q":"This is a question two?",
//         "A":"answer a: e inventore laboriosam voluptatem sunt officiis mollitia.",
//         "B":"answer b",
//         "C":"answer c",
//         "correct":"B"
//     },
//     {
//       "Q":"",
//       "A":"",
//       "B":"",
//       "C":"",
//       "correct":""
//   },
//   ]
// }

export default App;
