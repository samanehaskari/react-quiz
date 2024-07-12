import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemmaining }) {
  const minuts = Math.floor(secondsRemmaining / 60);
  const seconds = secondsRemmaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="timer">
      {minuts < 10 ? "0" : ""}
      {minuts}:{seconds}
    </div>
  );
}
