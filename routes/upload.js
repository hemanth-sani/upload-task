const path = require('path');

const express = require('express');

const uploadController = require('../controllers/upload');

const router = express.Router();


router.get('/',uploadController.uploadFile);

module.exports = router;