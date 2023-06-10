import React from "react";

function Results({ totalCorrect, totalQuestion }) {
  return (
    <div className="final-results">
      <h1>Final Results</h1>
      {totalCorrect === 6 ||
      totalCorrect === 7 ||
      totalCorrect === 8 ||
      totalCorrect === 9 ||
      totalCorrect === 10 ? (
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
        {totalCorrect} / {totalQuestion} correct answers in 3s
      </h2>
      <button>Play Again</button>
    </div>
  );
}

export default Results;
