const express = require('express');
const router  = express.Router();
// const staticController = require('../controllers/static');
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registrations');
const jobs = require('../controllers/jobs');


function secureRoute(req, res, next) {
  if(!req.session.isAuthenticated || !req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/');
    });
  }
  next();
}

// A home route
router.get('/', (req, res) => res.render('index'));

// RESTful routes for the Job resource
// All URLS should contain /jobs
router.route('/jobs')
  .get(jobs.index)
  .post(secureRoute, jobs.create);

router.route('/jobs/new')
  .get(secureRoute, jobs.new);

router.route('/jobs/:id')
  .get(jobs.show)
  .put(secureRoute, jobs.update)
  .delete(secureRoute, jobs.delete);

router.route('/jobs/:id/edit')
  .get(secureRoute, jobs.edit);

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);


module.exports = router;
