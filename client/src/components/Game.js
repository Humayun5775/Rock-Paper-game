import React, { useState } from "react";
import axios from "axios";

function Game() {
  const [score, setScore] = useState({ user: 0, computer: 0 });
  const [selection, setSelection] = useState(null);
  const [result, setResult] = useState(null);

  const makeSelection = (choice) => {
    setSelection(choice);
    axios
      .post("./routes/api/game", { choice })
      .then((res) => {
        setScore(res.data.score);
        setResult(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      <div>
        <button onClick={() => makeSelection("rock")}>Rock</button>
        <button onClick={() => makeSelection("paper")}>Paper</button>
        <button onClick={() => makeSelection("scissors")}>Scissors</button>
      </div>
      <div>
        {selection && <p>You chose: {selection}</p>}
        {result && <p>{result}</p>}
        <p>User score: {score.user}</p>
        <p>Computer score: {score.computer}</p>
      </div>
    </div>
  );
}

export default Game;
