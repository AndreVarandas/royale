const trae = require('trae');
const clashapiFactory = require('clashapi/factory');

const clashapi = clashapiFactory(trae);
const util = require('../../utils/util');

module.exports.index = (req, res, next) => {
  clashapi.leagues()
    .then((response) => {
      util.sendJsonResponse(res, 200, { leagues: response });
    })
}