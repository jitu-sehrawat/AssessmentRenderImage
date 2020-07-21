const express = require('express');
const router = express.Router();

const featureOneController = require('./featureOne.controller');

router.post('/featureOneFuntion', featureOneController.featureOneFuntion);

module.exports = router;
