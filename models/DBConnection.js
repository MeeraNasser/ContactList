require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });
const databaseName = process.env.databaseStorage;
const path = require("path");
var sequelize = require("sequelize");

let connection = new sequelize("LearningSystem", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});
connection
  .authenticate()
  .then(function(err) {
    console.log("connected");
  })
  .catch(function(err) {
    console.log(err);
  });

module.exports = connection;
