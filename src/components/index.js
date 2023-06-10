import React, { useEffect } from "react";
import Question from "./Question/Question";
import { Space, Spin } from "antd";
import "./Quiz.css";
function Quiz({ questions, score, setScore, setQuestions }) {
  const [options, setOptions] = React.useState();
  const [currQues, setCurrQues] = React.useState(0);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz-container">
      {questions ? (
        <>
          <div className="quizScore">Score : {score}</div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      )}
    </div>
  );
}

export default Quiz;
