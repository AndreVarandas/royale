var express = require('express');
var router = express.Router();

const ctrlCards = require('../controllers/cards');

/* GET home page. */
router.get('/', ctrlCards.index);

/**GET card detail */
router.get('/cards/:cardId', ctrlCards.getOne);

module.exports = router;
