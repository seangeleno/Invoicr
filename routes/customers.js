var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

// Get All Customers
router.get('/', function(req, res){
	Customer.getCustomers(function(err, customers){
		if(err){
			res.send(err);
		}
		res.json(customers);
	});
});

// Get Single Customer
router.get('/:id', function(req, res){
	Customer.getCustomerById(req.params.id, function(err, customer){
		if(err){
			res.send(err);
		}
		res.json(customer);
	});
});

// Add Customer
router.post('/', function(req, res){
	var customer = req.body;
	Customer.addCustomer(customer, function(err, customer){
		if(err){
			res.send(err);
		}
		res.json(customer);
	});
});

module.exports = router;
