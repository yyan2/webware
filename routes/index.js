var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs');
var util = require('util');
var path = require('path');


var db = require('../db_js/database_yyan');
var dbyk = require('../db_js/database_ykarita');
var dbhf = require('../db_js/database_hfang');
var database_ylin= require('../db_js/database_ylin');

var formidable = require('formidable');

//var multer = require('multer');
var done = false;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PetOverFlow' });
});

/** get images **/
router.get('/public/images/:file', function(req, res) {
  var file = req.params.file;
  var img = fs.readFileSync('public/images/' + file);
  res.writeHead(200, {'Content-Type': 'image/jpg'});
  res.end(img, 'binary');
});


//jade fragments for render html in div4
router.get('/renderJade/:file', function(req, res){
  var file = req.params.file;
  res.render(file);
});

// Post form data into database including image path
router.post('/inputData',function (req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname + '/../public/images';
  form.keepExtensions = true;

  form.parse(req, function(err, fields, files) {
    console.log('parse');
    var fileName = path.basename(files.userPhoto.path);
    console.log(fileName);
    //sql
  });
  console.log('finish uploading form');
  return;
});

//post handler
router.post('/query', function(req, res) {
  var sqlQuery = db.convertQueryToSql(req);
  db.queryDatabase(res, sqlQuery, function(res, dataArray){
    console.log(dataArray);
    res.render('resultTable', {data: dataArray});
  })
});
router.get('/petType', dbyk.petTypeChart);
router.get('/petGender', dbyk.petGenderChart);
router.get('/petLocation', dbyk.petLocationChart);
router.get('/petAge', dbyk.petAgeGraph);




/////
// router for getting image file.
// this router is used by gallery.js
// this router first create a query on database,
// then get the picture locatin
// the database in used is hfang_db
// create table pet_pic values(pic_id int(8), pic_location varchar(20));
router.get('/getimg/:file', function(req, res) {
  //console.log(req.params.file);
  dbhf.hfangdb(res, req.params.file);
});




module.exports = router;

