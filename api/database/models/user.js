'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.comment);
      User.hasMany(models.rating);
      User.hasOne(models.userAuth);
    }
  };
  User.init({
    user: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};