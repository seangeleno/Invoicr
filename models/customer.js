var mongoose = require('mongoose');


//Customer Schema

var customerSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  company: {
    type: String,

  },
  logo_url: {
    type: String,

  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  created_at: {
    type: Date,
    default: date.now
  },
});

var Customer = module.exports = mongoose.model('Customer', customerSchema)
