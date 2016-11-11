// Load environment variables
require('dotenv').config();

// Load our dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create server ==================
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to our database ==================
mongoose.connect('mongodb://nreyes:nater638@ds149207.mlab.com:49207/photo-studio'); // (process.env.DB_URI);

// Set the routes ==================
app.use(require('./app/routes'));

// Start our server ==================
app.listen(port);
