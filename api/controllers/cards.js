const trae = require('trae');
const clashapiFactory = require('clashapi/factory');

const clashapi = clashapiFactory(trae);
const util = require('../../utils/util');

/**
 * Util Functions and Constants
 */
const MAX_RESULTS = 8;


/**
 * Decomposes required query string parameters
 *
 * @param {Object} req
 * @returns Object
 */
const processQueryParams = (req) => {
  let page = parseInt(req.query.page);
  let limit = parseInt(req.query.limit);
  if (!page)
    page = 0;
  if (!limit)
    limit = MAX_RESULTS;

  return { page: page, limit: limit };
};


/**
 * Processes index action.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.index = (req, res, next) => {
  util.sendJsonResponse(res, 200, { availableEndpoints: {'/cards': 'getAllCards', '/cards/:cardId': 'getOneCard' }});
};


/**
 * Gets all available cards
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.getAllCards = (req, res, next) => {
  let queryParams = null;
  let cardsCount = null;
  let skip = null;
  let cardsToSend = null;
  clashapi.cards()
    .then((cards) => {
      queryParams = processQueryParams(req);
      cardsCount = cards.length;
      skip = queryParams.page * queryParams.limit;
      cardsToSend = cards.slice(skip, skip + queryParams.limit);
      util.sendJsonResponse(res, 200, {
          cards: cardsToSend,
          pages: {
            total: Math.round(cards.length / queryParams.limit),
            currentPage: queryParams.page,
            limit: queryParams.limit
          }
         });
    });
};


/**
 * Gets one card for the specified ID parameter
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.getOneCard = (req, res, next) => {
  clashapi.cards(req.params.cardId)
    .then((card) => {
      util.sendJsonResponse(res, 200, card);
    });
}
