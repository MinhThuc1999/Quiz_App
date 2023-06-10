import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";
import React from "react";
import Quiz from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Results />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
