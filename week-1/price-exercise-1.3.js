var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 1.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-1.3.js
; Author: Josh Price
; Date:   19 February 2019
; Modified By: Josh Price
; Description: Class Refresher 
;===========================================
*/

// start program

//Function Class Declarations
function cellPhone(manufacturer, model, color, price) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.price = price;

        this.getModel = function() {
            return this.model
        },

        this.getPrice = function() {
            return this.price
        },
        
        this.getDetails = function() {
            return 'Manufacturer: ' + this.manufacturer + '\n' + 
                'Model: ' + this.getModel() + '\n' +
                'Color: ' + this.color + '\n' +
                'Price: ' + this.getPrice()
        }
};

//variable with cellPhone information
var phone = new cellPhone('Google', 'Pixel', 'Silver', '$699');

//Output
console.log(phone.getDetails());

// end program