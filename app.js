const aws = require('aws-sdk');
const path = require('path');
const multer = require('multer');
const express = require("express");
const bodyParser = require('body-parser');
const uuid = require('uuid').v4;

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');


// const page404 = require('./routes/404');
const uploadFile = require('./routes/upload');
const uploadedFile = require('./routes/uploadedFile');
const listFile = require('./routes/list');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'css')));


app.use(uploadFile);
app.use(uploadedFile);
app.use(listFile);
// app.use(page404);



app.listen(5200);
console.log('your listening 3000');