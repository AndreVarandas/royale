module.exports = {
  baseURL: 'http://www.clashapi.xyz',
  baseLocalURL: process.env.NODE_ENV === 'production' ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com/api/v1` : 'http://localhost:3000/api/v1'
}