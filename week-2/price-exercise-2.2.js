var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 2.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-2.2.js
; Author: Josh Price
; Date:   2 March 2019
; Modified By: Josh Price
; Description: Prototypes 
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//Creating Person Object
var person = {
    getAge: function () {
        return this.age
    }
};

//instantiating person object
var bob = Object.create(person, {
    "age": {
        "value": 30
    },

    "fullname" : {
        "value": "Bob Smith"
    }
});


//Logging the output of bob.fullname and bob.age
console.log("The person's full name is '%s'.",  bob.fullname);
console.log("This person's age is '%s'.", bob.age);

// end program


