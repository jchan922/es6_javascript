
// .reduce
// condenses down an array into a single value


// Example 1
// sum all numbers in an array

var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {      // basic for loop requires us to create
    sum += numbers[i];
}

numbers.reduce(function(sum, number) {          // using .reduce takes in arguments sum and number
    return sum + number;                        // return needed or else returns null
}, 0);                                          // pass in a second argument into reduce as initial value here
                                                    // each time we iterate, second argument is passed into iterator function as sum


// Example 2
// end up with an array of all color values from array

var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
];

primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);


// Example 3
// balanced parens problem
// given a string, are parens correctly balanced?

function balancedParens(string) {
    return !string.split("").reduce(function(previous, char) {      // ! returns a boolean
		if (previous < 0) { return previous }	                    // JS interprets zero as falsy
      	if (char === "(") { return ++previous; }                    // JS interprets negative or positive as truthy
		if (char === ")") { return --previous; }
      	return previous;
    }, 0);
}

balancedParens(")(")


// Quiz - sum all distances traveled

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip) {
        previous += trip.distance;
        return previous;
}, 0);


// Quiz - create an object that tallies the number of sitting and standing desks

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') {
        previous.sitting += 1;
        return previous
    }
    if (desk.type === 'standing') {
        previous.standing += 1;
        return previous
    }
    return previous;
}, { sitting: 0, standing: 0 });


// Quiz - write a function that wil remove all duplicate values from an array

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(previous, num1) {
        if ( previous.find(function(num2) { return num1 === num2 }) ) {
            return previous;
        } else {
            previous.push(num1);
            return previous;
        }
    }, []);

}

// Solution:
    // compare the array to the empty array we pass in
    // push from array to the empty array only if num1 isn't found in the previous array

unique(numbers);
