var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 3.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-3.3.js
; Author: Josh Price
; Date:   9 March 2019
; Modified By: Josh Price
; Description: Singleton Pattern
;===========================================
*/


// start program

//
var DatabaseSingleton = (function () {
    var instance;
    function creatInstance () {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = creatInstance();
            }
            return instance;
        }
    }
});

//Creating function to compare the two database instances
function databaseSingletonTest () {
    //creating database instances
    var databaseinstance1 = DatabaseSingleton.getInstance;
    var databaseinstance2 = DatabaseSingleton.getInstance;

    //outputting the boolean
    console.log("Same database instane? " + (databaseinstance1 === databaseinstance2));
 }

 //calling function defined above
 databaseSingletonTest();

// end program