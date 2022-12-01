
export default function QuizHeader(props) {
    return(
      <div>
        <h1>Welcome to gun permit quiz!</h1>
        <h2>Current points: {props.currentPoints}</h2>
      </div>
    );
  }