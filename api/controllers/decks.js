const trae = require('trae');
const config = require('../../config');

/**
 * Sets status code and responds content as json
 *
 * @param {Object} res
 * @param {Number} status
 * @param {Object} content
 */
const sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};


module.exports.random = (req, res, next) => {
  trae.get(`${config.baseURL}/api/random-deck`)
    .then((response) => {
      sendJsonResponse(res, 200, response.data);
    });
};