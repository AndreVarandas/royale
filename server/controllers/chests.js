const trae = require('trae');
const config = require('../../config');

module.exports.index = (req, res, next) => {
  let maxArenaLevel = 0;
  trae.get(`${config.baseLocalURL}/chests`)
    .then((response) => {
      maxArenaLevel = Math.max.apply(Math, response.data.chests.map((o) => o.arena));
      res.status(200).render('chests', {
        pageHeader: {
          title: 'Chests',
          subtitle: 'Check out available chests'
        },
        chests: response.data.chests,
        maxArenaLevel: maxArenaLevel
      });
    });
};