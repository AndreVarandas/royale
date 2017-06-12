const trae = require('trae');
const clashapiFactory = require('clashapi/factory');

const clashapi = clashapiFactory(trae);

const sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.index = (req, res, next) => {
  sendJsonResponse(res, 200, { availableEndpoints: {'/cards': 'getAllCards', '/cards/:cardId': 'getOneCard' }});
};

module.exports.getAllCards = (req, res, next) => {
  clashapi.cards()
    .then((cards) => {
      sendJsonResponse(res, 200, cards);
    });
};

module.exports.getOneCard = (req, res, next) => {
  clashapi.cards(req.params.cardId)
    .then((card) => {
      sendJsonResponse(res, 200, card);
    });
}
