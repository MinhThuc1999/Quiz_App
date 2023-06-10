import React from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";

function Results({ score, totalQuestion }) {
  return (
    <div className="final-results">
      <h1>Final Results</h1>
      {score >= 3 ? (
        <div>
          <p style={{ width: "20%", height: "20%", display: "inline-block" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/256/7880/7880191.png"
              alt=""
            />
          </p>
          <p>Congratulations!!</p>
          <p>You are amazing!!</p>
        </div>
      ) : (
        <div>
          <p style={{ width: "20%", height: "20%", display: "inline-block" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/560/560514.png"
              alt=""
            />
          </p>
          <p>Completed!!</p>
          <p>Better luck next time!!</p>
        </div>
      )}

      <h2>
        {score} / {totalQuestion} correct answers in 3s
      </h2>
      <Link to={"/quiz"}>
        <button className="button-submit">Play Again</button>
      </Link>
    </div>
  );
}

export default Results;
