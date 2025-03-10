'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  driver.init({
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    age: DataTypes.INTEGER,
    titles: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'driver',
  });
  return driver;
};