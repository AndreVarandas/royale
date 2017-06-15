const trae = require('trae');
const config = require('../../config');

let baseResponseObject = {
  pageHeader: {
    title: 'Random Deck',
    subtitle: 'Generate a random deck!'
  }
};

module.exports.index = (req, res, next) => {
  trae.get(`${config.baseLocalURL}/random`)
    .then((cards) => {
      baseResponseObject.cards = cards.data;
      res.render('random-deck', baseResponseObject);
    })
};