import './QuizHeader.css';

export default function QuizHeader(props) {
    return(
      <div className='quiz-banner'>
          <h1>Welcome to gun permit quiz!</h1>
          <div className="header-numbers-wrapper">
            <div className="header-number">
              <h3>Points: {props.currentPoints} / {props.amountOfQuestions} </h3>
            </div>
            <div className="header-number">
              <h3 className="quetsion-number"> Question: {props.questionIndex+1} </h3>
            </div>
          </div>
      </div>
    );
  }