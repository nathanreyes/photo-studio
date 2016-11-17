const mongoose = require('mongoose');

// Create a schema
const photoSchema = new mongoose.Schema({
  slug: String,
  imgUrl: String,
  caption: String,
});

// Create the model
const photo = mongoose.model('Photo', photoSchema);

// Export the schema and model
exports.PhotoSchema = photoSchema;
exports.Photo = photo;
