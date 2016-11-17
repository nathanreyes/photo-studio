const { Order } = require('../models/order');

module.exports = {
  getAll,
  getSingle,
  addSingle,
  updateSingle,
  deleteSingle,
};

function getAll(req, res) {

  // Find all orders
  Order.find((err, orders) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'OK' response with orders
    else res.send(orders);
  });
}

function getSingle(req, res) {

  // Find order by id
  Order.findById(req.params.id, (err, order) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!order) res.sendStatus(404);

    // Send 'OK' response with session
    else res.send(order);
  });
}

function addSingle(req, res) {

  // Create new order
  const order = new Order();
  order.purchase_date = req.body.purchase_date;
  order.line_items = req.body.line_items;
  order.total_price = req.body.total_price;

  // Save the order
  order.save((err, newOrder) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(error);

    else {

      // Set location header
      res.location(`sessions/${newOrder.id}`);

      // Send 'created' response
      res.status(201).send(newOrder);
    }
  });
}

function updateSingle(req, res) {

  // Find order with id and update with request body
  Order.findByIdAndUpdate(req.params.id, req.body, (err, order) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    // Send 'OK' response
    else res.sendStatus(200);
  });
}

function deleteSingle(req, res) {

  // Remove the order with id
  Order.findByIdAndRemove(req.params.id, (err, order) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response if session not found
    else if (!order) res.sendStatus(404);

    // Send 'OK' response
    else res.sendStatus(200);
  });}
