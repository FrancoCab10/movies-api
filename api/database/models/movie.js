'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.comment, {
        onDelete: 'CASCADE'
      });
      Movie.hasMany(models.rating, {
        onDelete: 'CASCADE'
      });
    }
  };
  Movie.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rated: DataTypes.STRING,
    released_on: DataTypes.DATE,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    plot: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'movie',
  });
  return Movie;
};