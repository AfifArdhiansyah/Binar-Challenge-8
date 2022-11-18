'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });

      this.belongsTo(models.Car, {
        foreignKey: "carId",
      });
    }
  }
  UserCar.init({
    userid: DataTypes.INTEGER,
    carid: DataTypes.INTEGER,
    rentstartedat: DataTypes.DATE,
    rentendedat: DataTypes.DATE,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'UserCar',
    tableName: 'usercars',
  });
  return UserCar;
};
