const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  team1: String,
  team2: String,
  score1: String,
  score2: String,
  overs1: String,
  overs2: String,
  wickets1: Number,
  wickets2: Number,
  status: String
});

module.exports = mongoose.model('Match', matchSchema);
