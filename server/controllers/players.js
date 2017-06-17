const trae = require('trae');
const config = require('../../config');

module.exports.index = (req, res, next) => {
  trae.get(`${config.baseLocalURL}/players`)
    .then((response) => {
      res.status(200).render('players', {
        pageHeader: {
          title: 'Players',
          subtitle: 'Experience, archer towers and kings tower info.'
        },
        players: response.data.players
      });
    });
};