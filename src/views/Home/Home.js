import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Masthead from '../../components/Masthead/Masthead'
import Questions from '../../components/Questions/Questions'
import Navbar from '../../components/Navbar/Navbar';
import backupQuestions from '../../backup/questionsRollback.json'
import './Home.scss';

function Home() {
    const [questionsDB, setQuestionsDB] = useState(null)
    const[state, setState]=useState(0);
    const[questionIndex, questionIndexSetter]=useState(0);
  
    useEffect(() => {
      getQuestions()
    }, [questionIndex]);
  
    async function getQuestions(){
      axios.get(`${process.env.REACT_APP_QUESTIONS_DB_URL}/gunPermit`).then(res => {
        setQuestionsDB(res.data);
      }).catch(err => {
      console.error("Couldn't get questions", err);
      setQuestionsDB(backupQuestions.gunPermit);
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
        <>
          <Navbar/>
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
        </>
      );
    }
  }
  
  export default Home;