/* jshint indent: 2 */
var connection = require('./DBConnection.js');
var DataTypes = require('sequelize');
const UserModel = require('../models/User');

const UserContactsModel = connection.define('UserContacts', {
  ID: {
    type: DataTypes.BIGINT(20),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: DataTypes.BIGINT(20),
    allowNull: false
  },
  ContactID: {
    type: DataTypes.BIGINT(20),
    allowNull: false
  }
}, {
  tableName: 'UserContacts',
  timestamps: false
});

UserContactsModel.belongsTo(UserModel, { foreignKey: 'DepartmentID', as: 'DepartmentEmployees', sourcekey: 'DepartmentID' });


module.exports = UserContactsModel;
