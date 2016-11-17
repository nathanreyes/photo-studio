const { Product } = require('../models/product');

module.exports = {
  seed,
  getAll,
  getSingle,
};

function seed(req, res) {

  // Build the products
  const products = [
    {
      code: 'ABC1234',
      price: 110.00,
      imgUrl: 'http://',
    },
  ];

  // Remove all products
  Product.remove({}, () => {

    // Use the clients model to insert/save
    for (product of products) {
      var newProduct = new Product(product);
      newProduct.save();
    }

    res.send('Database seeded.');
  });
}

function getAll(req, res) {

  // Find all products
  Order.find((err, products) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'OK' response with products
    else res.send(products);
  });
}

function getSingle(req, res) {

  // Find product by id
  Product.findById(req.params.id, (err, product) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!product) res.sendStatus(404);

    // Send 'OK' response with product
    else res.send(product);
  });
}
