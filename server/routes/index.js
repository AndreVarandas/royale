var express = require('express');
var router = express.Router();

const ctrlPage = require('../controllers/page');
const ctrlCards = require('../controllers/cards');
const ctrlDecks = require('../controllers/decks');

/* GET home page. */
router.get('/', ctrlPage.index);
/**GET card about page */
router.get('/about', ctrlPage.about);

/** GET All Cards page */
router.get('/cards', ctrlCards.getAllCards);
/**GET card detail page */
router.get('/cards/:cardId', ctrlCards.getOneCard);

/** GET Decks page */
router.get('/decks', ctrlDecks.getDecks);

module.exports = router;
