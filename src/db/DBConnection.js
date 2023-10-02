const mongoose = require("mongoose");

const serverURI ="mongodb+srv://Gcar5588:Gcar5588@cluster0.altodhd.mongodb.net/testing";

class DBConnection {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(serverURI, { useNewUrlParser: true })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
        console.log( err);
      });
  }
}

module.exports = new DBConnection();
