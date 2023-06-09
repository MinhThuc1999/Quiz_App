import "./App.css";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Results totalCorrect={9} totalQuestion={10} />
    </div>
  );
}

export default App;
