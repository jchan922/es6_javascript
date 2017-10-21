
// .every
// entire list to one single boolean
// compares all values with AND conditionals


// Example 1
// find all computers > 16 ram

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {        // basic for loop requires us to create
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

computers.every(function(computer){                 // using .find returns only first record found, not all
    return computer.ram > 16;                       // return needed or else returns null
});                                                 // do all records have ram > 16? no, so returns false.


// Example 2
// find all names with length > 4

var names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

names.every(function(name) {
    return name.length > 4;
});


// Example 3
// validate form fields on login

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('2Cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');

var fields = [username, password, birthdate];

var isFormValid = fields.every(function(field){
    return field.validate();
});

if (isFormValid) {
    // allow user to submit
} else {
    // show error message
}
