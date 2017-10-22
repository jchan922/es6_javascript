
// Fat Arrow Functions

/////////////////////
// What They Solve //
/////////////////////

// this context
    // lexical this
    // this is automatically set to this in the surrounding context
    // allows this to be what we expect

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    // teamSummary: function() {
    //     return this.members.map(function(member) {               // this is undefined
    //         return `${member} is on team ${this.teamName}`;
    //     });
    // }
    teamSummary: function() {
        // this ==== team
        return this.members.map((member) => {                       // no need for that or self
            return `${member} is on team ${this.teamName}`;
        });
    }
};

team.teamSummary();


// Example 1

// ES 5
var add = function(a, b){
    return a + b;
};
add(1,2);

// ES 6
const add = (a, b) => {                 // regular syntax
    return a + b;
};

const add = (a, b) => a + b;            // implicit return with single expressions
add(1,2)


// Example 2

const double = number => 2 * number;    // single arguments can ommit parens if desired
double(8);


// Example 3

const numbers = [1,2,3];
// numbers.map(function(number) {
//     return 2 * number;
// });
numbers.map(number => 2 * number);      // consise code with array helpers


// Quiz - refactor to ES6 syntax

// const fibonacci = function(n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};


// Quiz - this context
// add another key to this object called 'getName'

const profile = {
    name: 'Alex',
    getName() { return this.name },
};

profile.getName();
