'use strict';
const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/database.sqlite'
});

db.authenticate()
  .then(() =>{
    console.info('Connection to database has been established successfully.');
    require('../models/relations');
    // Activete if you modified a model, warning, it's a destructive operation
    // db.sync({ alter: true });
  })
  .catch((error) => {
    throw new Error(error);
  });

module.exports = db;