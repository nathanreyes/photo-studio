const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');
const clientController = require('./controllers/client.controller');
const sessionController = require('./controllers/session.controller');
const photoController = require('./controllers/photo.controller');
const orderController = require('./controllers/order.controller');
const productController = require('./controllers/product.controller');

module.exports = router;

// Main routes
router.get('/', mainController.showHome);

// Client routes
// =================== GET ===================
router.get('/clients/', clientController.getAll);
router.get('/clients/seed', clientController.seed);
router.get('/clients/:id', clientController.getSingle);
// =================== POST ===================
router.post('/clients/', clientController.addSingle);
// =================== PUT ===================
router.put('/clients/:id', clientController.updateSingle);
// =================== DELETE ===================
router.delete('/clients/:id', clientController.deleteSingle);

// Session routes
// =================== GET ===================
router.get('/sessions/', sessionController.getAll);
router.get('/sessions/:id', sessionController.getSingle);
router.get('/clients/:id/sessions/', sessionController.getAllForClient)
// =================== POST ===================
router.post('/sessions/', sessionController.addSingle);
// =================== PUT ===================
router.put('/sessions/:id', sessionController.updateSingle);
// =================== DELETE ===================
router.delete('/sessions/:id', sessionController.deleteSingle);

// Photo routes
// =================== GET ===================
router.get('/sessions/:id/photos/', photoController.getAllForSession);
router.get('/sessions/:sessionId/photos/:photoId', photoController.getSingleForSession);
// =================== POST ===================
router.post('/sessions/:id/photos/', photoController.addSingleForSession);
// =================== PUT ===================
router.put('/sessions/:sessionId/photos/:photoId', photoController.updateSingleForSession);
// =================== DELETE ===================
router.delete('/sessions/:sessionId/photos/:photoId', photoController.deleteSingleForSession);

// Order routes
// =================== GET ===================
router.get('/orders/', orderController.getAll);
router.get('/order/:id', orderController.getSingle);
// =================== POST ===================
router.post('/orders/:id', orderController.addSingle);
// =================== PUT ===================
router.put('/orders/:id', orderController.updateSingle);
// =================== DELETE ===================
router.delete('/orders/:id', orderController.deleteSingle);

// Product routes
router.get('/products/seed', productController.seed);
router.get('/products/', productController.getAll);
router.get('/products/:id', productController.getSingle);
