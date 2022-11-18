'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.UserCar, {
        foreignKey: "carid",
        as: "userCar",
      })
    }

    // toJSON() {
    //   return {
    //     id: this.id,
    //     name: this.name,
    //     price: this.price,
    //     size: this.size,
    //     image: this.image,
    //     createdAt: this.createdAt,
    //     updatedAt: this.updatedAt,
    //     rentStartedAt: this.UserCar?.rentStartedAt,
    //     rentEndedAt: this.UserCar?.rentEndedAt,
    //   }
    // }
  }
  Car.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    size: DataTypes.STRING,
    image: DataTypes.STRING,
    iscurrentlyrented: DataTypes.BOOLEAN,
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
    modelName: 'Car',
    tableName: 'cars',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
  });
  return Car;
};
