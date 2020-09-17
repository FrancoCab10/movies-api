const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Rating = db.define('rating', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {});

module.exports = Rating;