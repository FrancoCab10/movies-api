const { DataTypes } = require('sequelize');
const db = require('../config/db');

const UserAuth = db.define('userAuth', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {});

module.exports = UserAuth;