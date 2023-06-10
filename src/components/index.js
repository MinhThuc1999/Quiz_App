import React from "react";

function Quiz({ name, questions, score, setScore, setQuestions }) {
  const [options, setOptions] = React.useState();
  const [options, setOptions] = React.useState();
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return <div className=""></div>;
}

export default Quiz;
