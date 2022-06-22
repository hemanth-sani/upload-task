const aws = require('aws-sdk');
const path = require('path');

const s3 = new aws.S3({apiVersion: '2006-03-01'});
exports.listFile= async (req, res, next) => {
    let r = await s3.listObjectsV2({ Bucket:'hemanth-upload' }).promise();
    let x = r.Contents.map(item => item.Key);
    res.render('list',{
        pageTitle:'list',
        files: x,
        path:'/list'
    });
};

exports.deleteFile = async (req, res, next) => {
    const filename = req.body.filename;
    await s3.deleteObject({ Bucket:'hemanth-upload' , Key: filename }).promise();
    res.send("File Deleted Successfully");
};


exports.downloadFile = async (req, res) => {
    const filename = req.body.filename;
    res.attachment(filename);
    let x = await s3.getObject({ Bucket: 'hemanth-upload', Key: filename }).createReadStream();
    x.pipe(res);
};

