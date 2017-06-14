const trae = require('trae');
const config = require('../../config');

module.exports.getDecks = (req, res, next) => {
  res.render('deck-builder', {
    pageHeader: {
      title: 'Decks',
      subtitle: 'Build your deck'
    },
    cards: []
  });
}