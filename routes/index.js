var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PetOverFlow' });
});

//jade fragments for render html in div4
router.get('/renderJade/:file', function(req, res){
  var file = req.params.file;
  res.render(file);
});


module.exports = router;
