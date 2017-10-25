
// Destructuring
// pull properties off of objects


// Example 1 - destructure with objects

// ES 5
var expense = {
    type: 'Business',
    amount: '$45 USD'
}

var type = expense.type;
var amount = expense.amount;
// ES 6
const { type } = expense;           // declare new variables
const { amount } = expense;         // with references on expense object

const { type, amount } = expense    // shorthand for above


// Example 2 - destructure with function arguments

// ES 5
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
fileSummary(savedFile);
// ES 6
function fileSummary( { name, extension, size}, { color } ) {
    return `The file ${name}.${extension} is of size ${size}`;
}
fileSummary(savedFile, { color: 'red' });


// Example 3 - destructure with arrays

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

// ES 5
const firstCompany = companies[0];      // access first element of array
// ES 6
const [ name ] = companies;             // "Google"
const [ name2, ...rest ] = companies;   // ["Facebook", "Uber"]


// Example 3 - destructure with arrays and objects together

const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' },
];

// ES 5
var location = companies[0].location;
// ES 6
const [ { location } ] = companies;                         // returns entire location[0] object first
                                                            // grabs the location property of location[0]

const Google = {
    locations: ['Mountain View', 'New York', 'London'],
}
const { locations: [ location ] } = Google;                 // look at locations property on Google object
                                                            // returns array of locations
                                                            // pull out the first element and call it location

// Example 4 - take user and password info and save to database

// ES 5
function signUp(username, password, email, dob, city) {                         // order of parameters matters here
    // create new user logic
};

// other code
// other code
// other code
// other code
signUp('myname', 'mypassword', 'email@email.com', '1/1/1990', 'New York');

// ES 6
function signUp({ username, password, email, dob, city }) {                     // destructuring removes need for order
    // create new user logic
};
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'email@email.com',
    dob: '1/1/1990',
    city: 'New York'
};
signUp(user);


// Example 5 - Restructuring data

const points = [
    [4,5],
    [10,1],
    [0,40]
];

points.map( pair => {               // map over points array
    const [ x, y ] = pair;          // destructure each inner pair array and create new local vars
    return { x: x, y: y };          // return x and y arguments as a new object and push into resulting array
});

points.map(([ x, y ]) => {          // map over points array
                                    // destructure each inner pair array and pass them as arguments
    return { x, y };                // return x and y arguments as a new object and push into resulting array
});

// Result should be:
    // [
    //     { x: 4, y: 5 },
    //     { x: 10, y: 1 },
    //     { x: 0, y: 40 },
    // ]


// Quiz - Refactor this code to use destructuring.

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};
isEngineer(profile);

// ES 5
function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
// ES 6 - w/ refactor
function isEngineer( {title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}


// Quiz - Convert this array of arrays into an array of objects

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
    return { subject, time, teacher };
});


// Quiz -
    // Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.
    // Do not use any array helpers!

const numbers = [1, 2, 3];
double(numbers);

function double(array, finalArray=[]) {         // original solution
    if (array.length === 0 ) {                      // if first array empty, return finalArray
    	return finalArray;
    }
  	let [temp] = array;                             // get value in array
  	finalArray.push(temp*2);                        // push into finalArray
	array.splice(0,1);                              // remove first in array
  	return double(array, finalArray);               // pass new array and finalArray back recursively
}

function double( [ number, ...rest ] ) {
    // double takes in an array argument and deconstructs at each iteration
        // number is first number in array
        // rest is array of the remaining array

    // if number is undefined, return an empty array

    // else multiply [ number by 2, run double() passing in ...rest ]
        // each iteration of the recursive function is adding on to the array, and not replacing it.
            // [ 2, ...double([2,3]) ]
            // [ 2, 4, ...double(3) ]
            // [ 2, 4, 6, ...double([]) ]
            // recursion bubbles down to the last possible iteration and bubbles back up to return answer
    return number === undefined ? [] : [number * 2, ...double(rest)];
}
