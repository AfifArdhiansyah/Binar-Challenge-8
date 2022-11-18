'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'roleid', })
    }
  }
  Role.init({
    name: DataTypes.STRING,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
  });
  return Role;
};
