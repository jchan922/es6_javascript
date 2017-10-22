
// ES5 - only var

// var - can be changed
var name = 'Jane';
var title = 'Software Engineer';
var hourlyWage = 40;


// ES6 - either const or let

// let - similar to var and can be changed
let title = 'Software Engineer';
let hourlyWage = 40;

// const - immutable and can't be changed
const name = 'Jane';


/////////////////////////
// REASONS FOR CHANGES //
/////////////////////////

function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];       // do not expect characters to change
    let number = 0;                                     // expect number to be changed

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }

    return number;
}

count('aeiobzxceiaipbiox');
