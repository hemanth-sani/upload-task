const aws = require('aws-sdk');
const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const express = require('express');
const s3 = new aws.S3({apiVersion: '2006-03-01'});
const uploadController = require('../controllers/list');

const router = express.Router();


router.get('/list',uploadController.listFile);
router.post('/delete',uploadController.deleteFile);
router.post('/download',uploadController.downloadFile);

module.exports = router;