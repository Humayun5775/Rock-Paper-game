const express = require('express');
const router = express.Router();

router.post('/play', (req, res) => {
  const { userChoice } = req.body;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const result = calculateResult(userChoice, computerChoice);
  res.json({ userChoice, computerChoice, result });
});

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

module.exports = router;