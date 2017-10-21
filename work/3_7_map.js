
// .map
// to avoid mutating array
// takes original array and returns a new array with results


// Example 1
// double numbers and store into a new array

var numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {      // basic for loop requires us to create
    doubledNumbers.push(numbers[i] * 2);        // an additional array for results
}

var doubled = numbers.map(function(number){     // .map allows us to return a results array inherently
    return number * 2;                          // return needed or else returns null
});


// Example 2
// return prices of all cars

var cars = [
    { model: 'Buick', price: 'CHEAP'},
    { model: 'Camaro', price: 'expensive'},
];

var prices = cars.map(function(car) {
    return car.price;
});


// Quiz - create a new array the contains height of each image

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});


// Quiz - create a new array the contains distance / time for each trip

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
});


// Quiz - implement a 'pluck' function.  pluck should accept an array and a string
// representing a property name and return an array containing that property from each object.

var paints = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
];

function pluck(array, property) {
    var newArray = array.map(function(i){
        return i[property];
    });

    return newArray;
}

pluck(paints, 'color');
