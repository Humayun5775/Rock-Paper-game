import React, { useState } from 'react';
import Game from './components/Game';
import Selection from './components/Selection';

const App = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);
    const gameResult = calculateResult(choice, computerChoice);
    setResult(gameResult);
  };

  const calculateResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie!';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      {userChoice ? (
        <div>
          <Game
            userChoice={userChoice}
            computerChoice={computerChoice}
            result={result}
          />
          <button onClick={() => setUserChoice('')}>Play again</button>
        </div>
      ) : (
        <Selection handleUserChoice={handleUserChoice} />
      )}
    </div>
  );
};

export default App;
