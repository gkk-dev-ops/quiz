import './Masthead.scss';

export default function Masthead(props) {
    return(
      <div className='quiz-banner'>
          <h2>Welcome to gun permit quiz!</h2>
          <div className="header-numbers-wrapper">
            <div className="header-number">
              <h5>Points: {props.currentPoints} / {props.amountOfQuestions} </h5>
            </div>
            <div className="header-number">
              <h5 className="quetsion-number"> Question: {props.questionIndex+1} </h5>
            </div>
          </div>
      </div>
    );
  }