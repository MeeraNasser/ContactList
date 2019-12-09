/* jshint indent: 2 */
var connection = require('./DBConnection.js');
var DataTypes = require('sequelize');
const bcrypt = require('bcrypt')

const UserModel = connection.define('User', {
  ID: {
    type: DataTypes.BIGINT(20),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  FirstName: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  LastName: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  PhoneNumber: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Authorization: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  DeviceToken: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  FingerPrint: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'User',
  timestamps: false
});

UserModel.beforeCreate(async (user, options) => {
  try {
    const hash = await bcrypt.hash(user.Password, 10);
    user.Password = hash;
  } catch (error) {
    throw error
  }
});

UserModel.prototype.isValidPassword = async function (Password) {
  try {
    const user = this;
    const compare = await bcrypt.compare(Password, user.Password);
    return compare;
  } catch (error) {
    throw error
  }
}

module.exports = UserModel;
