var express = require('express');
var router = express.Router();

var Customer = require('../models/customer.js');
var Invoice = require('../models/invoice.js');

//Get all customers
router.get('/', function(req, res){
  Invoice.getInvoices(function(err, invoices){
    if(err){
      res.send(err);
    }
    res.json(invoices)
  })
});

module.exports = router;
