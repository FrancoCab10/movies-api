const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Comment = db.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {});

module.exports = Comment;