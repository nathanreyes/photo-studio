const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const customerSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  created_on: Date,
});

// Create the model
const customerModel = mongoose.model('Customer', customerSchema);

// Export the model
module.exports = customerModel;
