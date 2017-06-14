const trae = require('trae');
const config = require('../../config');

module.exports.getAllCards = (req, res, next) => {
  trae.get(`${config.baseLocalURL}/cards?page=${req.query.page}&limit=${req.query.limit}`)
    .then((response) => {
      res.render('card-list', {
        pageHeader: {
          title: 'Card List',
          subtitle: 'See all the cards!'
        },
        cards: response.data.cards,
        pages: response.data.pages
      });
    });
};

module.exports.getOneCard = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards/' + req.params.cardId)
      .then((response) => {
        res.render('card-detail', {
          card: response.data,
          pageHeader: {
            title: 'Card List',
          }
        });
      });
};