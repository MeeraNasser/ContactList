/* jshint indent: 2 */
var connection = require('./DBConnection.js');
var DataTypes = require('sequelize');
const bcrypt = require('bcrypt')

const ContactModel = connection.define('Contact', {
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
  },
  CreatedAt:{
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Contact',
  timestamps: false
});

// ContactModel.beforeCreate(async (Contact, options) => {
//   try {
//     const hash = await bcrypt.hash(Contact.Password, 10);
//     Contact.Password = hash;
//   } catch (error) {
//     throw error
//   }
// });

// ContactModel.prototype.isValidPassword = async function (Password) {
//   try {
//     const Contact = this;
//     const compare = await bcrypt.compare(Password, Contact.Password);
//     return compare;
//   } catch (error) {
//     throw error
//   }
// }

module.exports = ContactModel;
