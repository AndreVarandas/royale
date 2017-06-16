const trae = require('trae');
const config = require('../../config');

module.exports.index = (req, res, next) => {
  trae.get(`${config.baseLocalURL}/players`)
    .then((response) => {
      res.status(200).render('players', {
        pageHeader: {
          title: 'Players',
          subtitle: 'Players levels, experience and tower info.'
        },
        players: response.data.players
      });
    });
};