export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>welcome to React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}
