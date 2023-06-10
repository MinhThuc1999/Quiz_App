import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";
import React from "react";
import Quiz from "./components";
import axios from "axios";

function App() {
  const [questions, setQuestions] = React.useState();
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      const config = {
        method: "get",
        url: "https://opentdb.com/api.php?amount=5",
      };
      await axios(config)
        .then(function (response) {
          setQuestions(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getData();
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={<Results score={score} totalQuestion={5} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
