
// .sum
// entire list to one single boolean
// compares all values with OR conditionals


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

computers.some(function(computer){                 // using .find returns only first record found, not all
    return computer.ram > 16;                      // return needed or else returns null
});                                                // does at least one record have ram > 16? yes, so returns true.


// Example 2
// find all names with length > 4

var names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

names.some(function(name) {
    return name.length > 4;
});


// Quiz - given array of users, return true if any is pending

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});
