
// Rest and Spread

/////////////////////
// What They Solve //
/////////////////////

// rest operator
    // ... syntax
    // pass in more arguments
    // capture a list
// spread operators
    // ... syntax
    // concatonates and flattens arrays
    // join arrays into one


// Example 1 - Rest Operators

// ES 5
function addNumbers(numbers) {
    return numbers.reduce(function(sum, number) {
        return sum += number;
    }, 0);
}
// ES 6
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
addNumbers([1,2,3,4,5]);            // pass in standard array
addNumbers(1,2,3,4,5,6,7);          // pass in as many arguments as you want


// Example 2 - Spread Operators

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// ES 5
defaultColors.concat(userFavoriteColors);                               // join 2 arrays into one
// ES 6
[ 'blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];     // join arrays (or other elements) into one


// Example 3 - Spread and Rest operators

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {        // if milk isn't in the list of arguments
        return ['milk', ...items];          // add milk to list and return
    }
    return items
}

validateShoppingList('oranges', 'bread', 'eggs');


// Example 4 - changing method name in javascript library
// depecate a method in favor of another
// pass through arguments to another or newer method

const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};


// Quiz - Refactor the following function to use the Rest operator.

function product(...numbers) {
    return numbers.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}


// Quiz - Refactor the following function to use the Spread operator.

function join(array1, array2) {
    return [...array1, ...array2];
}


// Quiz - Refactor the following function only using the Rest operator.

function unshift(array, ...rest) {
    return rest.concat(array);
}
