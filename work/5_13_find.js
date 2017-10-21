
// .find
// search through an array and find a particular element in array
// returns first record if found


// Example 1
// find user with name 'Alex'

var users = [
    { name: 'Jill'},
    { name: 'Alex'},
    { name: 'Bill' }
];

var user;

for (var i = 0; i < users.length; i++) {        // basic for loop requires us to create
    if(users[i].name === 'Alex') {
        user = users[i];
        break;
    }
};

users.find(function(user){                      // using .find returns only first record found, not all
    return user.name === 'Alex';                // return needed or else returns null
})


// Example 2
// find a record where comment id is equal to post id

var posts = [
    { id: 1, content: 'New Post' },
    { id: 2, content: 'Old Post' },
];

var comment = { postId: 1, content: 'Great Post' }

function postForComment(posts, comment) {
    return posts.find(function(post){
        return post.id = comment.postId;
    });
}

postForComment(posts, comment);


// Quiz - find admin users

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true;
});


// Quiz - find account with balance of 12

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
});


// Quiz - create a function that is shorthand for finding criteria

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

var searchFor = { height: 25 };

function findWhere(array, criteria) {
  	var prop = Object.keys(criteria)[0];
    return array.find(function(i){
        return i[prop] === criteria[prop];
    });
}

findWhere(ladders, searchFor);
