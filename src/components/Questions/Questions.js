import './Questions.css'
import React, {useState} from 'react';

export default function Questions(props) {
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
                    <h2>
                        {props.questionBase[props.questionIndex].Q}
                    </h2>
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