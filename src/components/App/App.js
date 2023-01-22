import './App.scss';
import React, {useState, useEffect} from 'react';
import Masthead from '../Masthead/Masthead'
import Questions from '../Questions/Questions'
import axios from 'axios'


function App() {
  const [questionsDB, setQuestionsDB] = useState(null)
  const[state, setState]=useState(0);
  const[questionIndex, questionIndexSetter]=useState(0);

  useEffect(() => {
    getQuestions()
  }, [questionIndex]);

  async function getQuestions(){
    axios.get(`${process.env.REACT_APP_QUESTIONS_DB_URL}/gunPermit`).then(res => {
      setQuestionsDB(res.data);
    })
  }

  if(!questionsDB){
    return (
        <div className="loading">
          <p>Loading questions...</p>
        </div>
    );
  }else{
    return (
      <div className="App">
        <Masthead
        currentPoints={state}
        amountOfQuestions={questionsDB.length}
        questionIndex={questionIndex}
        />

        <Questions
        questionBase={questionsDB}
        questionIndex={questionIndex}
        questionIndexSetter={questionIndexSetter}
        points={state}
        pointsSetter={setState}
        />
      </div>
    );
  }
}

export default App;
