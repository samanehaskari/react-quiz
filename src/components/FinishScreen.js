export default function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const presentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        {/* تابع ceil عدد را به نزدیک ترین عدد صحیح بزرگتر رند میکند */}
        You Scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        {Math.ceil(presentage) + "%"}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        RESTART QUIZ
      </button>
    </>
  );
}
