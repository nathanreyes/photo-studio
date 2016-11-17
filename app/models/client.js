const mongoose = require('mongoose');

// Create a schema
const clientSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  added_on: Date,
});

// Create the model
const client = mongoose.model('Client', clientSchema);

// Export the schema and model
exports.ClientSchema = clientSchema;
exports.Client = client;
