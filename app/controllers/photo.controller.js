const { Session } = require('../models/session');
const { Photo } = require('../models/photo');

module.exports = {
  getAllForSession,
  getSingleForSession,
  addSingleForSession,
  updateSingleForSession,
  deleteSingleForSession,
};

function getAllForSession(req, res) {

  // Find session by id
  Session.findById(req.params.id, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    // Send 'OK' response with session photos
    else res.Send(session.photos);
  });
}

function getSingleForSession(req, res) {

  // Find session by id
  Session.findById(req.params.sessionId, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    else {

      // Find session photo by id
      const photo = session.photos.id(req.params.photoId);

      // Send 'NOT FOUND' response
      if (!photo) res.sendStatus(404);

      // Send 'OK' response with session photo
      else res.sendStatus(photo);
    }
  });
}

function addSingleForSession(req, res) {

  // Find session by id
  Session.findById(req.params.sessionId, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    else {

      // Create new photo
      const photo = session.photos.create({
        imgUrl: req.body.imgUrl,
        caption: req.body.caption,
      });

      // Add photo to session photos
      session.photos.push(photo);

      // Save the session
      session.save((err) => {

        // Send 'BAD REQUEST' response with error
        if (err) res.status(400).send(error);

        else {

          // Set location header
          res.location(photo.slug);

          // Send 'created' response
          res.status(201).send(photo);
        }
      });
    }
  });
}

function updateSingleForSession(req, res) {

  // Find session by id
  Session.findById(req.params.sessionId, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    else {

      // Find the session photo by id
      const photo = session.photos.id(req.params.photoId);
      photo.imgUrl = req.body.imgUrl;
      photo.caption = req.body.caption;

      // Save the session
      session.save((err) => {

        // Send 'BAD REQUEST' response with error
        if (err) res.status(400).send(error);

        // Send 'OK' response
        else res.sendStatus(200);
      });
    }
  });
}

function deleteSingleForSession(req, res) {

  // Find session by id
  Session.findById(req.params.sessionId, (err, session) => {

    // Send 'BAD REQUEST' response with error
    if (err) res.status(400).send(err);

    // Send 'NOT FOUND' response
    else if (!session) res.sendStatus(404);

    else {

      // Find the session photo by id
      const photo = session.photos.id(req.params.photoId).remove();

      // Send 'NOT FOUND' response if photo not found
      if (!photo) res.sendStatus(404);

      // Save the session
      session.save((err) => {

        // Send 'BAD REQUEST' response with error
        if (err) res.status(400).send(error);

        // Send 'OK' response
        else res.sendStatus(200);
      });
    }
  });
}
