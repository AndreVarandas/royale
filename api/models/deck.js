const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: String,
  type: String,
  elixirCost: Number
});

const deckSchema = new mongoose.Schema({
  cards: [cardSchema],
  elixirCost: Number
});

mongoose.model('deck', deckSchema);