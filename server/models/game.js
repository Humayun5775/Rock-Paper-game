const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  userChoice: { type: String, required: true },
  computerChoice: { type: String, required: true },
  result: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;