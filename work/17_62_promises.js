
// Promises

    // promise states
        // 'unresolved' - pending, waiting for something to finish

        // 'resolved' - success, something finished and it succeeded

            // 'then' callback

        // 'rejected' - fail, something finished and it failed

            // 'catch' callback


// Example - create a promise

promise = new Promise((resolve, reject) => {
    reject();
});

// promise
//     .then(() => {
//         console.log('finally finished');
//     })
//     .then(() => {
//         console.log('i was also ran!!!');
//     })
//     .catch(() => {
//         console.log('rejected');
//     });

promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('rejected'));


// Example - async code with promises

promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    },3000);

    // var request = new XHTMLRequest()
    // // make request
    // request.onload = () => {
    //     resolve();
    // };

});

promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('rejected'));


// Example - ajax with fetch
    // fetch native browser code to get resources

url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())              // response.json() to return response as json
    .then(data => console.log(data))                // take readable json from above and console log it
    .catch(error => console.log('BAD',error));      // NOTE: catch will only hit if network request fails to be issued at all
