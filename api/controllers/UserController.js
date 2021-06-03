'use strict';
const bcrypt = require('bcrypt');
const auth = require('../config/auth');
const {
  sequelize: db,
  user: User,
  userAuth: UserAuth
} = require("../database");

const UserController = {

  getAll: async (req, res) => {
    try {
      const result = await User.findAll();
      res.json(result);
    } catch (err) {
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
        const result = await User.findByPk(id);
        result ? res.json(result) : res.status(404).json({
          error: true,
          message: 'User not found'
        });
      } catch (error) {
        res.status(500).json({
          error: true,
          message: 'Could not obtain User'
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'Invalid User id'
      });
    }
  },

  create: async (req, res) => {
    const t = await db.transaction();

    try {
      const userResult = await User.create(req.body, {transaction: t});
      await bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (!err) {
          await UserAuth.create({ userId: userResult.id, password: hash }, { transaction: t });
          t.commit();
          res.json({
            success: true,
            message: 'User successfully created',
            user: userResult
          });
        } else throw err;
      });
    } catch (error) {
      t.rollback();
      res.json({
        error: true,
        message: 'Could not create User'
      });
    }
  },

  login: async (req, res) => {
    if (req.body.user && req.body.password) {
      const { user, password } = req.body;

      try {
        const userResult = await User.findOne({ where: { user }, include: UserAuth });

        if (userResult) {
          const hashedPassword = userResult.userAuth.password;

          bcrypt.compare(password, hashedPassword, (err, isCorrect) => {
            if (!err && isCorrect) {
              res.json({
                id: userResult.id,
                name: userResult.name,
                lastName: userResult.lastName,
                avatar: userResult.avatar,
                token: auth.generateToken(userResult.id),
              });
            } else {
              res.status(400).json({
                error: true,
                message: 'Invalid password'
              });
            };
          });

        } else {
          res.status(404).json({
            error: true,
            message: 'Could not find User'
          });
        }

      } catch (error) {
        res.status(500).json({ error: true, message: 'Login error' });
      }
    } else {
      res.status(400).json({ error: true, message: 'Missing user or password' });
    }
  },

};

module.exports = UserController;