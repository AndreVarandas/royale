var express = require('express');
var router = express.Router();

const ctrlCards = require('../controllers/cards');
const ctrlPlayers = require('../controllers/players');
const ctrlChests = require('../controllers/chests');
const ctrlLeagues = require('../controllers/leagues');

/** Cards */
router.get('/', ctrlCards.index);
router.get('/cards', ctrlCards.getAllCards);
router.get('/cards/:cardId', ctrlCards.getOneCard);

/** Players */
router.get('/players', ctrlPlayers.index)

/** Chests */
router.get('/chests', ctrlChests.index);

/** Leagues */
router.get('/leagues', ctrlChests.index);

module.exports = router;