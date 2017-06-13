const trae = require('trae');
const config = require('../../config');

module.exports.getAllCards = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards')
    .then((response) => {
      res.render('card-list', { title: 'Card List', cards: response.data });
    });
}

module.exports.getOneCard = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards/' + req.params.cardId)
      .then((response) => {
        res.render('card-detail', { title: 'Card List', card: response.data });
      });
}