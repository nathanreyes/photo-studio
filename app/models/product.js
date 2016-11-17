const mongoose = require('mongoose');

// Create a schema
const productSchema = new mongoose.Schema({
  code: String,
  price: Number,
  imgUrl: String,
  photos: [{
    photo_id: String,
    black_and_white: Boolean,
  }],
});

// Create the model
const product = mongoose.model('Product', productSchema);

// Export the schema and model
exports.ProductSchema = productSchema;
exports.Product = product;
