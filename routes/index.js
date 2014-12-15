var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs');

var db = require('../db_js/database_yyan');
var dbyk = require('../db_js/database_ykarita');
var database_ylin= require('../db_js/database_ylin');

var multer = require('multer');
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

// Use multer to upload image and generate the new path
router.use(multer({ dest: './public/images/',
  rename: function (fieldname, filename) {
    return filename+Date.now();
    //return filename;
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path)
    done=true;
  }
}));

// Post form data into database including image path
router.post('/inputData',database_ylin.inputData);

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

module.exports = router;
