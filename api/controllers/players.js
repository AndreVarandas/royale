const trae = require('trae');
const clashapiFactory = require('clashapi/factory');

const clashapi = clashapiFactory(trae);
const util = require('../../utils/util');

module.exports.index = (req, res, next) => {
  clashapi.players()
    .then((response) => {
      util.sendJsonResponse(res, 200, { players: response });
    })
}