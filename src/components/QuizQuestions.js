
export default function QuizQuestion(props) {
    return(
        <div className="quiz-question">
            <h1>{props.questionBase.questions[0].q}</h1>
                <ol>
                    <li>{props.questionBase.questions[0].a}</li>
                    <li>{props.questionBase.questions[0].b}</li>
                    <li>{props.questionBase.questions[0].c}</li>
                    <li>{props.questionBase.questions[0].correct}</li>
                </ol>
                <button
                    onClick={() => {props.pointsSetter(props.points+1)}}>
                     Add point for the correct answer
                </button>
        </div>
        );
  }