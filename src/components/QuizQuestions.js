import './QuizQuestions.css'
import React, {useState} from 'react';

export default function QuizQuestion(props) {
    const [answerAClass, setAnswerAClass] = useState('');
    const [answerBClass, setAnswerBClass] = useState('');
    const [answerCClass, setAnswerCClass] = useState('');
    let alreadyAnswered = false;

    function resetQuestionState() {
        setAnswerAClass('')
        setAnswerBClass('')
        setAnswerCClass('')
    }

    return(
        <div className="quiz-question">
            <div className="quiz-tiles">
                <div className="question-tile">
                    <h1>
                        {props.questionBase[props.questionIndex].q}
                    </h1>
                </div>
                <div
                    className={`answer-tile ${answerAClass}`}
                    onClick={() => {
                        if (answerAClass === '' && answerBClass === '' && answerCClass === ''){
                            resetQuestionState()
                            if(props.questionBase[props.questionIndex].correct === 'A'){
                                setAnswerAClass("correct-answer");
                                props.pointsSetter(props.points+1);
                            }else{
                                setAnswerAClass("wrong-answer")
                            }
                        }
                    }}
                    >
                    {props.questionBase[props.questionIndex].A}
                </div>
                <div
                    className={`answer-tile ${answerBClass}`}
                    onClick={() => {
                        if (answerAClass === '' && answerBClass === '' && answerCClass === ''){
                            resetQuestionState()
                            if(props.questionBase[props.questionIndex].correct === 'B'){
                                setAnswerBClass("correct-answer")
                                props.pointsSetter(props.points+1)
                            }else{
                                setAnswerBClass("wrong-answer")
                            }
                        }
                    }}>
                    {props.questionBase[props.questionIndex].B}
                </div>
                    
                <div
                className={`answer-tile ${answerCClass}`}
                onClick={() => {
                    if (answerAClass === '' && answerBClass === '' && answerCClass === ''){
                        resetQuestionState()
                        if(props.questionBase[props.questionIndex].correct === 'C'){
                            setAnswerCClass("correct-answer")
                            props.pointsSetter(props.points+1)
                        }else{
                            setAnswerCClass("wrong-answer")
                        }                        
                    }
                }}
                >
                    {props.questionBase[props.questionIndex].C}
                </div>
            </div>
            <div className="check-answer">
                <button
                    className='check-answer-button'
                    onClick={() => {
                        resetQuestionState()
                        if (props.questionIndex > 0 && props.questionIndex <= props.questionIndexSetter.length ) {
                            props.questionIndexSetter(props.questionIndex-1)                         
                        }
                    }}
                >
                    ⬅️ Previous
                </button>
                <button
                    className='check-answer-button'
                    onClick={() => {
                        resetQuestionState()
                        if (props.questionIndex >= 0 && props.questionIndex < props.questionIndexSetter.length ) {
                            props.questionIndexSetter(props.questionIndex+1)                            
                        }
                    }}
                >
                    Next ➡️ 
                </button>
            </div>
        </div>
        );
  }