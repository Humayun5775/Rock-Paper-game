import React from 'react';

const Selection = ({ handleUserChoice }) => {
  return (
    <div>
      <p>Choose your weapon:</p>
      <button onClick={() => handleUserChoice('rock')}>Rock</button>
      <button onClick={() => handleUserChoice('paper')}>Paper</button>
      <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
    </div>
  );
};

export default Selection;
