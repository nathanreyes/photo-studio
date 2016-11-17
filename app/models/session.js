const mongoose = require('mongoose');
const { PhotoSchema } = require('./photo');

// Create a schema
const sessionSchema = new mongoose.Schema({
  client_id: mongoose.Schema.Types.ObjectId,
  title: String,
  date: Date,
  photos: [PhotoSchema],
});

// Create the model
const session = mongoose.model('Session', sessionSchema);

// Export the schema & model
exports.SessionSchema = sessionSchema;
exports.Session = session;
