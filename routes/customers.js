var express = require('express');
var router = express.Router();

//Get all customers
router.get('/', function(req, res){
  res.send('/customers route')
});

module.exports = router;
