import React, { useState } from 'react';

const Game = () => {
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
      <p>Choose your weapon:</p>
      <button onClick={() => handleUserChoice('rock')}>Rock</button>
      <button onClick={() => handleUserChoice('paper')}>Paper</button>
      <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
      <h2>{result}</h2>
      <p>You chose: {userChoice}</p>
      <p>Computer chose: {computerChoice}</p>
    </div>
  );
};

export default Game;
