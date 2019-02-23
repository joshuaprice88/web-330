var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 1.4");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-1.4.js
; Author: Josh Price
; Date:   23 February 2019
; Modified By: Josh Price
; Description: Duck Typing.
;===========================================
*/

// start program

//Car Function Constructor Class
function Car (model) {
  this.model = model;
}

//Car prototype method
Car.prototype.start = function() {
  console.log("Car added to the racetrack")
};

//Truck Function Contructor Class
function Truck (model, year) {
  this.model = model;
  this.year = year;
}

//Truck prototype method
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack")
};

//Jeep Function Constructor Class
function jeep (model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

//Jeep Prototype Method
jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack")
};

//Creating variable to output
var hondaCivic = new Car('Civic', 'Honda');
var fordRaptor = new Truck('Raptor', 'Ford');
var jeepWrangler = new jeep('Wrangler', 'Jeep');

//Empty Racetrack Array
var raceTrack = [];

//creating driveIT function to push vehicle model to array
function driveIt(vehicle) {
  vehicle.start();
  raceTrack.push(vehicle)
}

//Outputting variables defined with vehicle information
driveIt(hondaCivic);
driveIt(fordRaptor);
driveIt(jeepWrangler);

//Output Ractrack with forloop to push items to array.
console.log('\n-- The following vehicles have been added to the racetrack --\n');

for(var x = 0; x < raceTrack.length; x++) {
  console.log(raceTrack[x].constructor.name + ": "+ raceTrack[x].model);
}
// end program


