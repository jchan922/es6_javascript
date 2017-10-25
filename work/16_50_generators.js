
// Generators

// What is a generator?
    // a function that can be entered and exited multiple times

// What does a generator do?
    // works with for of loops
    // iteratate over any data structures we want
    // custom iteration over particular fields and not entire object

// Generator delegators allow us to link objects together and combine

// Symbol.iterator a tool that teachs objects how to respond to for...of loop

function* numbers() {           // add an asterisk
    yield;                      //
}

const gen = numbers();
gen.next();                     // {"done":false}
gen.next();                     // {"done":true}
console.log(numbers());


// Example - Shopping to Laundromat to Home

function* shopping() {
    // do stuff on the sidewalk
    // walking down the sidewalk
    // go into the store with cash
    const stuffFromStore = yield 'cash';        // transitioning out of generator function with gen.value = 'cash'
                                                // transition back into function when gen.next('groceries') called
                                                // yield goes from 'cash' to 'groceries' from gen.next('groceries')
    // walking to laundry place
    const cleanClothes = yield 'laundry';       // transitioning out of generator function with gen.value = 'laundry'
                                                // transition back into function when gen.next('cleanClothes') called
                                                // yield goes from 'laundry' to 'cleanClothes' from gen.next('cleanClothes')
    // walking back home
    return [stuffFromStore, cleanClothes]
}

// do stuff in the store
const gen = shopping();
gen.next();                                     // begin executing code for first time
                                                    // leaving our house
                                                    // {"value":"cash","done":false}
// walking into the store
// walking up and down the aisles
// purchase our stuff
gen.next('groceries');                          // go back into the generator function
                                                    // leave the store with groceries
                                                    // {"value":"groceries","done":false}
gen.next('cleanClothes');                       // go back into the generator function
                                                    // leave the store with groceries
                                                    // {"value":"[groceries, cleanClothes]","done":true}


// Example - Iteration with generators

function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
gen.next();                             // {"value":"red","done":false}
gen.next();                             // {"value":"blue","done":false}
gen.next();                             // {"value":"green","done":false}
gen.next();                             // {"done":true}

const myColors = [];
for (let color of colors()) {           // at each yield in *colors
    myColors.push(color);               // push yielded color into myColors array
}


// Example - Iteration with generators w/ generator delegation
    // Create a generator function that iterates through all team memebers

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    // testingTeam: testingTeam OR
    testingTeam,                        // key value pair into testingTeam object
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineering: 'Dave',
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;                // yield* a 'trap door' the for...of loop recognizes and falls into
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}


// Example -  Generators with Symbol.iterator
    // refactor the previous example with Symbol.iterator

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {   // key that tells for...of loop to iterate over this generator
        yield this.lead;                // this is a reference to testingTeam
        yield this.tester;
    }
};

const engineeringTeam = {
    // testingTeam: testingTeam OR
    testingTeam,                        // key value pair into testingTeam object
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineering: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

const names = [];
for (let name of engineeringTeam) {
    // check engineeringTeam for [Symbol.iterator]
        // push name = this.lead
        // push name = this.manager
        // push name = this.engineer
        // yield* checks this.testingTeam for a [Symbol.iterator]
            // push name = this.lead
            // push name = this.tester
    names.push(name);
}


// Example - iterate through a tree data structure

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {                          // generator function
        yield this.content;                         // yield root node content first
        // generators can't use .map or .forEach
        for (let child of this.children) {          // yield* each iteration of chilren
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
]

const tree = new Comment('Great post!', children);
const values = [];
for (let value of tree) {
    values.push(value);
}
