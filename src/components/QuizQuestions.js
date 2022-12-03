import './QuizQuestions.css'

export default function QuizQuestion(props) {
    return(
        <div className="quiz-question">
            <div className="question-tile">
                <h1>
                    {props.questionBase.questions[props.questionIndex].q}
                </h1>
            </div>
            <div className="answer-tile">
                {props.questionBase.questions[props.questionIndex].a}
            </div>
                
            <div className="answer-tile">
                {props.questionBase.questions[props.questionIndex].b}
            </div>
                
            <div className="answer-tile">
                {props.questionBase.questions[props.questionIndex].c}
            </div>
            {/* <div className="answer-tile">
                {props.questionBase.questions[0].correct}
            </div> */}
            <div className="check-answer">
                <button className='check-answer-button'>Previous</button>
                <button className="check-answer-button"
                    onClick={() => {props.pointsSetter(props.points+1)}}>
                     Check if answer is correct.
                </button>
                <button
                    className='check-answer-button'
                    onClick={() => {
                        props.questionIndexSetter(props.questionIndex+1)
                    }}
                >
                    Next
                </button>
            </div>
        </div>
        );
  }