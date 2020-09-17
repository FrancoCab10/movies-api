const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Movie = db.define('movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    defaultValue: 2019,
  },
  rated: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  released_on: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plot: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {});

module.exports = Movie;