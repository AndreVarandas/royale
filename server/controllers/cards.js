const trae = require('trae');
const config = require('../../config');

module.exports.getAllCards = (req, res, next) => {
  trae.get(`${config.baseLocalURL}/cards?page=${req.query.page}&limit=${req.query.limit}`)
    .then((response) => {
      res.render('card-list', {
        title: 'Card List',
        cards: response.data.cards,
        pages: response.data.pages
      });
    });
}

module.exports.getOneCard = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards/' + req.params.cardId)
      .then((response) => {
        res.render('card-detail', { title: 'Card List', card: response.data });
      });
}