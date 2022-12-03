import './QuizQuestions.css'
import React, {useState} from 'react';

export default function QuizQuestion(props) {
    const [answerAClass, setAnswerAClass] = useState('');
    const [answerBClass, setAnswerBClass] = useState('');
    const [answerCClass, setAnswerCClass] = useState('');

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
                        console.log(props.questionBase.length)
                        if (props.questionIndex > 0 && props.questionIndex < props.questionBase.length ) {
                            props.questionIndexSetter(props.questionIndex-1)                         
                        }
                    }}
                >
                    ⬅️ Previous
                </button>
                <button
                    className='check-answer-button'
                    onClick={() => {
                        console.log(props.questionIndex)
                        console.log(props.questionBase.length-1)
                        console.log(answerAClass !== '')
                        console.log(answerBClass !== '')
                        console.log(answerCClass !== '')
                        if(props.questionIndex === props.questionBase.length-1 && (answerAClass !== '' || answerBClass !== '' || answerCClass !== '')){
                            alert(`Congratulations, you've finished with ${Math.round(props.points / props.questionBase.length * 10000)/100}%.`)
                        }
                        if (props.questionIndex >= 0 && props.questionIndex < props.questionBase.length-1 ) {
                            props.questionIndexSetter(props.questionIndex+1)                            
                            resetQuestionState()
                        }
                    }}
                >
                    Next ➡️ 
                </button>
            </div>
        </div>
        );
  }