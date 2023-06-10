import React from "react";
import { createBrowserHistory } from "history";
import Error from "../Error/Error";
import { Button, Space } from "antd";

import "./Question.css";
import { useNavigate } from "react-router-dom";
function Question({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
}) {
  const [selected, setSelected] = React.useState();
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  console.log(questions);
  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues === 4) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
      console.log(currQues);
    } else setError("Please select an option first");
  };

  return (
    <div className="question-container">
      <h1 style={{ color: "#ffffff" }}>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2 style={{ color: "#ffffff" }}>{questions[currQues].question}</h2>
        <div className="options">
          {error && <Error child={error}></Error>}
          {options &&
            options.map((i) => (
              <button
                style={{ cursor: "pointer", borderRadius: "10px" }}
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            type="primary"
            block
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
