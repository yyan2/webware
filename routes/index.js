var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs');

var db = require('../db_js/database_yyan');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PetOverFlow' });
});

//jade fragments for render html in div4
router.get('/renderJade/:file', function(req, res){
  var file = req.params.file;
  res.render(file);
});

//post handler
router.post('/query', function(req, res) {
  var sqlQuery = db.convertQueryToSql(req);
  db.queryDatabase(res, sqlQuery, function(res, dataArray){
    console.log(dataArray);
    res.render('resultTable', {data: dataArray});
  })
});

module.exports = router;
