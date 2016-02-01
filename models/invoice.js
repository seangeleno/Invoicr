var mongoose = require('mongoose');


//Invoice Schema

var invoiceSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  service: {
    type: String,
    require: true
  },
  price: {
    type: String,

  },
  due: {
    type: String,

  },
  status: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

//Get Invoice

module.exports.getInvoices = function(callback, limit){
  Invoice.find(callback).limit(limit).sort([["createdAt", 'descending']]);
}
