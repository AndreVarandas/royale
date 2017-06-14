var express = require('express');
var router = express.Router();

const ctrlPage = require('../controllers/page');
const ctrlCards = require('../controllers/cards');
const ctrlDecks = require('../controllers/decks');
const ctrlLeagues = require('../controllers/leagues');
const ctrlChests = require('../controllers/chests');
const ctrlPlayers = require('../controllers/players');

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

/** GET Leagues Page */
router.get('/leagues', ctrlLeagues.index);

/** GET Chests Page */
router.get('/chests', ctrlChests.index);

/** GET Players Page */
router.get('/players', ctrlPlayers.index);

module.exports = router;
