var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 3.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-3.2.js
; Author: Josh Price
; Date:   9 March 2019
; Modified By: Josh Price
; Description: Facotry Pattern
;===========================================
*/


// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

// Oracle class constructor
function Oracle(properties) {
    this.username = properties.username || "db_admin"
    this.password = properties.password || "db_fishes"
    this.server = properties.server || "localhost:8080"
    this.version = properties.version || 7.8
}

// Informix class constructor
function Informix(properties) {
    this.username = properties.username || "if_admin"
    this.password = properties.password || "meowmeow"
    this.server = properties.server || "localhost:8000"
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } else if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  } else if (properties.databaseType === "Oracle") { //Modified if/else statements for Oracle/Informix Database
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

// Creating oracleFacotry database
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase ({
    databaseType: "Oracle",
    username:  Oracle.username,
    password: Oracle.password
})

// Creating InformixFactory Database
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: Informix.username,
    password: Informix.password
})

//Output
console.log(oracle)
console.log(informix)
// end program
