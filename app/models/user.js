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
      this.belongsTo(models.Role, {
        foreignKey: 'roleid',
      });
    }

    toJSON() {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
        image: this.image,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      }
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    encryptedpassword: DataTypes.STRING,
    roleid: DataTypes.INTEGER,
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
    modelName: 'User',
    tableName: 'users',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
  });
  return User;
};
