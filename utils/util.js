
/**
 * Sets status code and responds content as json
 *
 * @param {Object} res
 * @param {Number} status
 * @param {Object} content
 */
module.exports.sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};
