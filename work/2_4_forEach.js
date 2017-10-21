
// .forEach
// behaves like a for loop

// Example 1

// for each in colors array, run the iterator function
// console.log each color string
var colors = ['red', 'blue', 'green'];

colors.forEach(function(color) {
    console.log(color);
});

// Example 2

// for each in numbers array, run the iterator function
// pass in a function into forEach that adds each number to increase the sum
var numbers = [1,2,3,4,5];
var sum = 0;

function adder(number) {
    sum += number
}

numbers.forEach(adder);     // if adder(), adder is undefined

console.log(sum);


// Quiz - refactor using forEach

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    // for (var i = 0; i < posts.length; i++) {
    //   savePost(posts[i]);
    // }
    //

    posts.forEach(function(post){
       savePost(post);
    });

}

// Quiz - use forEach to calculate area and store in areas array

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

function getArea(image){
    var area = image.height * image.width;
    areas.push(area);
}

images.forEach(getArea);
