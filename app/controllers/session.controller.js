const { Session } = require('../models/session');

module.exports = {
  getAll,
  getSingle,
  getAllForClient,
  addSingle,
  updateSingle,
  deleteSingle,
};

function parseRequestForSession(req, session) {
  session.client_id = req.body.client_id;
  session.title = req.body.title;
  session.date = req.body.date;
}

function getAll(req, res) {

  // Find all sessions
  Session.find((err, sessions) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'OK' response with sessions
    else res.send(sessions);
  });
}

function getSingle(req, res) {

  // Find session by id
  Session.findById(req.params.id, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    // Send 'OK' response with session
    else res.send(session);
  });
}

function getAllForClient(req, res) {

  // Find all sessions for client
  Session.find({ client_id: req.params.id }, (err, sessions) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'OK' response with sessions
    else res.send(sessions);
  });
}

function addSingle(req, res) {

  // Create new session
  const session = new Session();

  // Parse request body for session
  parseRequestForSession(req, session);

  // Save the session
  session.save((err, newSession) => {

    if (err) {

      // Send 'BAD REQUEST' response with error
      res.status(400).send(error);

    } else {

      // Set location header
      res.location(`sessions/${newSession.id}`);

      // Send 'created' response
      res.status(201).send(newSession);
    }
  });
}

function updateSingle(req, res) {

  // Find session with id and update with request body
  Session.findByIdAndUpdate(req.params.id, req.body, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    // Send 'OK' response
    else res.sendStatus(200);
  });
}

function deleteSingle(req, res) {

  // Remove the session with id
  Session.findByIdAndRemove(req.params.id, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response if session not found
    else if (!session) res.sendStatus(404);

    // Send 'OK' response
    else res.sendStatus(200);
  });
}
