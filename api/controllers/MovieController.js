'use strict';
const { Op } = require("sequelize");
const db = require("../config/db");
const Movie = require('../models/Movie');
const Comment = require('../models/Comment');
const Rating = require("../models/Rating");
const User = require("../models/User");

const MovieController = {

  getAll: async (req, res) => {
    try {
      const searchParams = {
        attributes: {
          include: [
            [
              db.literal(`(
                SELECT COALESCE(AVG(rating.rating), 0)
                FROM ratings AS rating
                WHERE rating.movieId = movie.id
              )`),
              'rating'
            ]
          ]
        },
        order: [
          ['year', 'DESC'],
          [db.literal('rating'), 'DESC']
        ]
      };
      if (req.query.title) {
        searchParams.where = { 
          title: { 
            [Op.like]: `%${req.query.title}%`
          }
        };
      };

      const result = await Movie.findAll(searchParams);
      res.json(result);

    } catch(err) {
      res.status(500).json({
        error: true,
        message: 'Could not obtain Movies'
      });
    }
  },

  getById: async (req, res) => {
    const id = +req.params.id;
    if (id) {
      try {
        const subqueries = [
          [
            db.literal(`(
              SELECT COALESCE(AVG(rating.rating), 0)
              FROM ratings AS rating
              WHERE rating.movieId = movie.id
            )`),
            'rating'
          ]
        ];
        
        if (req.sessionInfo) {
          subqueries.push([
            db.literal(`(SELECT COALESCE((
              SELECT rating.rating
              FROM ratings AS rating
              WHERE rating.movieId = movie.id
              AND rating.userId = ${req.sessionInfo.sub}
            ), 0))`),
            'userRating'
          ]);
        }

        const result = await Movie.findOne({
          where: { id },
          attributes: {
            include: subqueries
          },
          include: {
            model: Comment,
            include: User
          }
        });

        result ? res.json(result) : res.status(404).json({
          error: true,
          message: 'Movie not found'
        });
      } catch (error) {
        res.status(500).json({
          error: true,
          message: 'Could not obtain Movie'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid Movie id'
      });
    }
  },

  create: async (req, res) => {
    try {
      const data = req.body;
      if (data.id) data.id = undefined;

      const result = await Movie.create(data);
      res.json({ success: true, message: 'Movie successfully created', movie: result });
    } catch(err) {
      res.status(500).json({
        error: true,
        message: 'Could not create Movie'
      });
    }
  },

  update: async (req, res) => {
    const id = +req.params.id;

    if (id) {
      try {
        const data = req.body;
        if (data.id) data.id = undefined;
  
        const result = await Movie.update(data, { where: { id } });
        if (result && result[0]) {
          res.json({ success: true, message: 'Movie successfully updated' });
        } else {
          res.status(404).json({ error: true, message: 'Movie not found' });
        }

      } catch(err) {
        res.status(500).json({
          error: true,
          message: 'Could not update Movie'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid Movie id'
      });
    }
  },

  delete: async (req, res) => {
    const id = +req.params.id;
    if (id) {
      try {
        const result = Movie.destroy({ where: { id } });
          
        if (result) {
          res.json({ success: true, message: 'Movie successfully deleted' });
        } else {
          res.status(404).json({ error: true, message: 'Movie not found' });
        }
      } catch(err) {
        res.status(500).json({
          error: true,
          message: 'Could not delete Movie'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid Movie id'
      });
    }
  },

  getUserRating: async (req, res) => {
    const movieId = +req.params.id;

    if (movieId) {
      try {
        const userId = req.sessionInfo.sub;
        const result = await Rating.findOne({ where: { userId, movieId } })
      
        if (result) {
          res.json(result);
        } else {
          res.status(404).json({ error: true, message: 'Rating not found' });
        }
      } catch(err) {
        res.status(500).json({
          error: true,
          message: 'Could not get Rating'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid Movie id'
      });
    }
  },

  updateUserRating: async (req, res) => {
    const movieId = +req.params.id;

    if (movieId) {
      try {
        const userId = req.sessionInfo.sub;
        const condition = { where: { userId, movieId } };
        const result = await Rating.findOne(condition);
  
        if (result) await Rating.update(req.body, condition);
        else await Rating.create({ userId, movieId, rating: req.body.rating});

        res.json({ success: true, message: 'Rating successfully updated' });
      } catch(err) {
        res.status(500).json({
          error: true,
          message: 'Could not update Rating'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid Movie id'
      });
    }
  },

  addComment: async (req, res) => {
    const movieId = +req.params.id;
    if (movieId) {
      try {
        const userId = req.sessionInfo.sub;
        const result = Comment.create({ movieId, userId, comment: req.body.comment })
        
        if (result) {
          res.json({ success: true, message: 'Comment successfully added' });
        } else {
          res.status(404).json({ error: true, message: 'Movie not found' });
        }
      } catch(err) {
        res.status(500).json({
          error: true,
          message: 'Could not create comment'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid Movie id'
      });
    }
  },
};

module.exports = MovieController;