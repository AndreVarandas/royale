const trae = require('trae');
const config = require('../../config');

module.exports.getDecks = (req, res, next) => {
  res.render('card-list', { title: 'Decks', cards: [] });
}