'use strict';
const router = require('express').Router();
const auth = require('../middlewares/auth');
const optionalAuth = require('../middlewares/optionalAuth');
const UserController = require('../controllers/UserController');
const MovieController = require('../controllers/MovieController');

router.route('/')
  .get((req, res) => res.status(200).json({code: 200, status: 'OK'}))

router.route('/user')
  .get(auth, UserController.getAll)
  .post(auth, UserController.create);

router.route('/user/:id')
  .get(auth, UserController.getById);

router.route('/login')
  .post(UserController.login);

router.route('/movies')
  .get(MovieController.getAll)
  .post(auth, MovieController.create);

router.route('/movies/:id')
  .get(optionalAuth, MovieController.getById)
  .put(auth, MovieController.update)
  .delete(auth, MovieController.delete);

router.route('/movies/:id/rating')
  .post(auth, MovieController.updateUserRating);

router.route('/movies/:id/comments')
  .post(auth, MovieController.addComment)

module.exports = router;
