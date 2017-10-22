
// Enhanced Object Literals

/////////////////////
// What They Solve //
/////////////////////

// if key/value pair is named the same, just place once
// for methods, remove function and colon and add fat arrow


// Example 1

// ES 5

function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);   // sum of all inventory
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;         // if match found, returns first record.price
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 },
]

const bookShop = createBookShop(inventory);
bookShop.priceForTitle('Harry Potter')


// ES 6 - Refactor

function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue => () {
            return this.inventory.reduce((total, book) => total + book.price, 0);   // sum of all inventory
        },
        priceForTitle => (title) {
            return this.inventory.find(book => book.title === title).price;         // if match found, returns first record.price
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 },
]

const bookShop = createBookShop(inventory);
bookShop.priceForTitle('Eloquent Javascript')


// Example 2

// ES 5

function saveFile() {
    $.ajax({
        method: 'POST',
        url: url,
        data: data
    })
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);

// ES 6

function saveFile() {
    $.ajax({
        url,
        data,
        method: 'POST',
    });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);


// Quiz - refactor to ES 6

const red = '#ff0000';
const blue = '#0000ff';

const Car = {
  color: color,
  drive: function() {
      return 'Vroom!';
  },
  getColor: function() {
      return this.color;
  }
};
const COLORS = { red, blue };


// Quiz - refactor to ES 6

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };


// Quiz - refactor to ES 6

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
      width,
      height
  };
}


// Quiz - refactor to ES 6

const color = 'red';

const Car = {
  color,
  drive: function() {
      return 'Vroom!';
  },
  getColor: function() {
      return this.color;
  }
};
