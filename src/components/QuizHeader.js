import './QuizHeader.css';

export default function QuizHeader(props) {
    return(
      <div className='quiz-banner'>
        <h1>Welcome to gun permit quiz!</h1>
        <h2>Current points: {props.currentPoints}</h2>
      </div>
    );
  }