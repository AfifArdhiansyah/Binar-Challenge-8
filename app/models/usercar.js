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
        foreignKey: "userid",
      });

      this.belongsTo(models.Car, {
        foreignKey: "carid",
      });
    }
  }
  UserCar.init({
    userid: DataTypes.INTEGER,
    carid: DataTypes.INTEGER,
    rentstartedat: DataTypes.DATE,
    rentendedat: DataTypes.DATE,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "createdat",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "updatedat",
    }
  }, {
    sequelize,
    modelName: 'UserCar',
    tableName: 'usercars',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
  });
  return UserCar;
};
