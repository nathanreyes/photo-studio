const Customer = require('../models/customer');

module.exports = {
  getAll,
  getSingle,
  addSingle,
  updateSingle,
  deleteSingle,
  seed,
};

function parseRequestForCustomer(req, customer) {
  customer.first_name = req.body.first_name;
  customer.last_name = req.body.last_name;
  customer.email = req.body.email;
  customer.phone = req.body.phone;
}

function getAll(req, res) {

  // Find all customers
  Customer.find((err, customers) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'OK' response with customers
    else res.send(customers);
  });
}

function getSingle(req, res) {

  // Get the customer id
  const { id } = req.params;

  // Find customer by id
  Customer.findById(id, (err, customer) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!customer) res.sendStatus(404);

    // Send 'OK' response with customer
    else res.send(customer);
  });
}

function addSingle(req, res) {

  // Create new customer
  const cust = new Customer();

  // Parse request body for customer
  parseRequestForCustomer(req, cust);

  // Save the customer
  cust.save((err, newCust) => {

    if (err) {

      // Send 'BAD REQUEST' response with error
      res.status(400).send(error);

    } else {

      // Set location header
      res.location(`customers/${newCust._id}`);

      // Send 'created' response
      res.status(201).send(newCust);
    }
  })
}

function updateSingle(req, res) {

  // Get the customer id
  const { id } = req.params;

  // Find customer with id and update with request body
  Customer.findByIdAndUpdate(id, req.body, (err, item) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!item) res.sendStatus(404);

    // Send 'OK' response
    else res.sendStatus(200);
  });
}

function deleteSingle(req, res) {

  // Get the customer id
  const { id } = req.params;

  // Remove the customer with id
  Customer.findByIdAndRemove(id, (err, item) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response if item not found
    else if (!item) res.sendStatus(404);

    // Send 'OK' response
    else res.sendStatus(200);
  });
}

// Seed our database
function seed(req, res) {

  const customers = [{
    "first_name": "Ralph",
    "last_name": "Simpson",
    "email": "rsimpson0@unesco.org",
    "phone": "507-(303)173-7542"
  }, {
    "first_name": "Carol",
    "last_name": "Gibson",
    "email": "cgibson1@slate.com",
    "phone": "86-(210)700-2783"
  }, {
    "first_name": "Samuel",
    "last_name": "Peterson",
    "email": "speterson2@wsj.com",
    "phone": "351-(350)290-4697"
  }, {
    "first_name": "Melissa",
    "last_name": "Harvey",
    "email": "mharvey3@discuz.net",
    "phone": "62-(646)230-8693"
  }, {
    "first_name": "Sean",
    "last_name": "Lynch",
    "email": "slynch4@sakura.ne.jp",
    "phone": "86-(277)184-3352"
  }, {
    "first_name": "William",
    "last_name": "Carter",
    "email": "wcarter5@tumblr.com",
    "phone": "63-(273)185-5998"
  }, {
    "first_name": "Benjamin",
    "last_name": "Shaw",
    "email": "bshaw6@hibu.com",
    "phone": "98-(716)759-3318"
  }, {
    "first_name": "Diane",
    "last_name": "Collins",
    "email": "dcollins7@webs.com",
    "phone": "48-(281)653-3984"
  }, {
    "first_name": "Justin",
    "last_name": "Larson",
    "email": "jlarson8@irs.gov",
    "phone": "62-(324)816-7208"
  }, {
    "first_name": "Jessica",
    "last_name": "Reyes",
    "email": "jreyes9@instagram.com",
    "phone": "60-(912)210-3242"
  }, {
    "first_name": "Sara",
    "last_name": "Jackson",
    "email": "sjacksona@i2i.jp",
    "phone": "20-(683)519-0945"
  }, {
    "first_name": "Thomas",
    "last_name": "Dean",
    "email": "tdeanb@prnewswire.com",
    "phone": "27-(205)309-4779"
  }, {
    "first_name": "Jonathan",
    "last_name": "Hudson",
    "email": "jhudsonc@timesonline.co.uk",
    "phone": "55-(688)433-8330"
  }, {
    "first_name": "Raymond",
    "last_name": "Evans",
    "email": "revansd@mlb.com",
    "phone": "82-(989)398-2586"
  }, {
    "first_name": "Andrea",
    "last_name": "Oliver",
    "email": "aolivere@time.com",
    "phone": "48-(123)883-4135"
  }, {
    "first_name": "Paula",
    "last_name": "Freeman",
    "email": "pfreemanf@webs.com",
    "phone": "7-(940)390-2851"
  }, {
    "first_name": "Mary",
    "last_name": "Barnes",
    "email": "mbarnesg@hatena.ne.jp",
    "phone": "7-(713)515-4630"
  }, {
    "first_name": "Janice",
    "last_name": "Kelley",
    "email": "jkelleyh@tumblr.com",
    "phone": "7-(517)793-8296"
  }, {
    "first_name": "Shawn",
    "last_name": "Fernandez",
    "email": "sfernandezi@shutterfly.com",
    "phone": "386-(335)686-1416"
  }, {
    "first_name": "Harold",
    "last_name": "Day",
    "email": "hdayj@bbc.co.uk",
    "phone": "62-(738)673-1297"
  }];

  // Remove all customers
  Customer.remove({}, () => {

    // Use the customer model to insert/save
    for (cust of customers) {
      var newCust = new Customer(cust);
      newCust.save();
    }

    res.send('Database seeded.');
  });
}
