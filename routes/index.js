var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PetOverflow' });
});

//jade fragments for render html in div 4
router.get('/gallery.html', function(req, res){
  res.render('gallery');
});

router.get('/inputPet.html', function(req, res){
  res.render('inputPet');
});

router.get('/inputResult.html', function(req, res){
  res.render('inputResult');
});

router.get('/queryPet.html', function(req, res){
  res.render('queryPet');
});

router.get('/queryResult.html', function(req, res){
  res.render('queryResult');
});

router.get('/statistics.html', function(req, res){
  res.render('statistics');
});



module.exports = router;
