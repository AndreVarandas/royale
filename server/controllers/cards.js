const trae = require('trae');
const config = require('../../config');
const baseAPIURL = 'http://localhost:3000/api/v1';

module.exports.index = (req, res, next) => {
  trae.get(config.baseLocalURL + '/cards')
    .then((response) => {
      res.render('index', { title: 'Express', cards: response.data });
    });
}