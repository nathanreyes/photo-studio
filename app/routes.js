const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');
const custController = require('./controllers/customers.controller');

module.exports = router;

router.get('/', mainController.showHome);

// Customer routes
router.get('/customers/', custController.getAll);
router.get('/customers/seed', custController.seed);
router.get('/customers/:id', custController.getSingle);
router.post('/customers/', custController.addSingle);
router.put('/customers/:id', custController.updateSingle);
router.delete('/customers/:id', custController.deleteSingle);

// Session routes
// /sessions/
// /sessions/:id
// /customers/:id/sessions

// Order routes
// /orders/
// /orders/:id
// /customers/:id/orders/
// /sessions/:id/orders/

// Photo routes
// /photos/
// /photos/:id
// /customers/:id/photos/
// /sessions/:id/photos/

// Product routes
// /products/
// /products/:id

// Line items routes
// /orders/:id/line-items
// /orders/:orderId/lineItems/:lineItemId
