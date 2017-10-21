
// .filter
// search through data and filter desired
// conditionals


// Example 1
// only show me fruits

var products = [
    { name: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit'},
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruit'},
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {             // basic for loop requires us to create
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
};

var filtered = products.filter(function(product){       // using .filter
    return product.type === 'fruit';                    // return needed or else returns null
});


// Example 2
// find all products quantity > 0, price < 10, type is vegetable

var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    { name: 'banana', type: 'fruit', quantity: 10, price: 15},
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    { name: 'orange', type: 'fruit', quantity: 3, price: 5},
];
var moreFiltered = products.filter(function(product){
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10;
});


// Example 3
// find all comments associated with one post

var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
];

// commentsForPost post object and comments array
function commentsForPost(post, comments) {
    return comments.filter(function(comment){       // filter through all comments
        return comment.postId === post.id;          // only get ones where post id's match
    })
}

commentsForPost(post, comments)


// Quiz - filter numbers > 50

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});


// Quiz - filter those with admin access

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});

// Quiz - create function reject that reverses a filter

function reject(array, iteratorFunction) {
    return array.filter(function(i){
        return iteratorFunction(i) === false;
    })
}

var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});
