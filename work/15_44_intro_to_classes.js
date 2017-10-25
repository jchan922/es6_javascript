
// Classes
// to set up inheritance and objects
// prototypal inheritance


// Example 1

// ES 5
function Car(options) {
    this.title = options.title;
}
Car.prototype.drive = function() {
    return 'vroom';
}
function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}
Toyota.prototype = Object.create(Car.prototype);    // Toyota inheritates from Car
Toyota.prototype.constructor = Toyota;              // constructor from Toyota function
Toyota.prototype.honk = function() {
    return 'beep';
}
const car = new Car({ title: 'Focus'});
const toyota = new Toyota( {color: 'red', title: 'Daily Driver'});

// ES 6
class Car {
	constructor({ title }) {                // init / initialize
        this.title = title;
    }
    drive() {
  		return 'VROOM'
    }
  }
class Toyota extends Car {                  // extends Car means Toyota inherits from Car
    constructor(options) {                  // children classes normally don't deconstruct objects
        super(options);                     // super is like calling Car.constructor()
        this.color = options.color;             // gets us the set up from parent constructor
    }
    honk() {
        return 'BEEP';
    }
}

const car = new Car({title: 'Focus'});
const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
toyota.drive()
toyota.honk()


// Example 2 - React

// ES 5
React.createClass({
    doSomething() { }
    doSomethingElse(){ }
});
// ES 6
class MyCompnent extends Component {
    doSomething() { }
    doSomethingElse(){ }
}


// Quiz - Create a class called 'Monster'.

class Monster {
    constructor( { name } ) {
        this.health = 100;
        this.name = name;
    }
}
const monster = new Monster({ name: 'Derek' });


// Quiz - Create a class called 'Snake'.
class Snake extends Monster {
    constructor( options ) {
        super(options)
        this.health = options.health - 10;
        this.name = options.name;
    }
    bite(snake) {
        return new Snake(snake);
    }

}
