// En mode Vanilla (nature)
const express = require('express');
const router = express.Router();

// En déstructuration
// const { Router } = require('express');

// // En mode abrégé
// const router = require('express').Router();

const mainController = require('./controllers/mainController');
const promosController = require('./controllers/promosController');

router.get('/', mainController.showHomePage);
router.get('/promos', promosController.showPromosList);

module.exports = router;