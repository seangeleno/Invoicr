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
//Get individual Invoice
router.get('/:id', function(req, res){
  Invoice.getInvoiceById(req.params.id, function(err, invoice){
    if(err){
      res.send(err);
    }
    res.json(invoice);
  })
})

module.exports = router;
