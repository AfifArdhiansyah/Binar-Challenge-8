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
        foreignKey: 'roleId',
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
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};
