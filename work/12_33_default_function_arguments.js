
// Default Function Arguments

/////////////////////
// What They Solve //
/////////////////////

// no existence checks
    // if agrument unassigned, we can pass defaults into parameters



// Example 1

// ES 5
function makeAjaxRequest(url, method) {

    if (!method) {
        method = 'GET';
    }

    // do logic

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

// ES 6
function makeAjaxRequest(url, method = 'GET') {
    // do logic
}

makeAjaxRequest('google.com');              // method defaults to GET
makeAjaxRequest('google.com', 'POST');      // method reassigned
makeAjaxRequest('google.com', null);        // null - method not reassigned to GET or POST


// Example 2

// ES 5
function User(id) {
    this.id = id;
}
function generateId() {
    return Math.random() * 999999;
}
function createAdminUser(user) {
    user.admin = true;
    return user;
}
createAdminUser(new User(generateId()));

// ES 6
function User(id) {
    this.id = id;
}
function generateId() {
    return Math.random() * 999999;
}
function createAdminUser(user = new User(generateId())) {       // by default all new admins will be new users
    user.admin = true;
    return user;
}
const user1 = new User(generateId());                           // create new user1
createAdminUser(user1;                                          // make user1 admin


// Quiz - Refactor the following code to use default function arguments.

function sum(a=0, b=0) {
    return a + b;
}


// Quiz - Refactor the following code to use default function arguments.

function addOffset(style={}) {
    style.offset = '10px';
    return style;
}
