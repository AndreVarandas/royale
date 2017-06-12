const trae = require('trae');
const config = require('../../config');

module.exports.index = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards')
    .then((response) => {
      res.render('index', { title: 'Express', cards: response.data });
    });
}

module.exports.getOne = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards/' + req.params.cardId)
      .then((response) => {
        res.render('card-detail', { title: 'Card Detail', card: response.data });
      });
}