const mongoose = require('mongoose');
const { ProductSchema } = require('./product');

// Create a schema
const orderSchema = new mongoose.Schema({
  purchase_date: Date,
  line_items: [{
    product: ProductSchema,
    qty: Number,
  }],
  total_price: Number,
});

// Create a model
const order = mongoose.model('Order', orderSchema);

// Export the schema and model
exports.OrderSchema = orderSchema;
exports.Order = order;
