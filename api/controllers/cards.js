const trae = require('trae');
const clashapiFactory = require('clashapi/factory');

const clashapi = clashapiFactory(trae);

module.exports.index = (req, res, next) => {
  res.status(200).json({ success: true,
    availableEndpoints: {'/getAllCards': 'getAllCards', '/getOneCard': 'getOneCard'},
  });
};

module.exports.getAllCards = (req, res, next) => {
  clashapi.cards()
    .then((cards) => {
      res.status(200).json(cards);
    })
};

module.exports.getOneCard = (req, res, next) => {

}
