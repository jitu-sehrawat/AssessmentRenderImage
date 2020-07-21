const express = require('express');
const router = express.Router();

const renderController = require('./render.controller');

router.get('/getJS', renderController.fetchJs);
router.get('/getImage', renderController.fetchImage);

module.exports = router;
