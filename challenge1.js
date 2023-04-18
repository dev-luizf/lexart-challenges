// Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]
// Get an array containing just the letters
// Get an array containing just the numbers
// Get the highest number from the array above

const array = ['a', 10, 'b', 'hola', 122, 15];

const letters = array.filter(item => typeof item === 'string');
console.log('Letters: ', letters);

const numbers = array.filter(item => typeof item === 'number');
console.log('Numbers: ', numbers);

const highestNumber = Math.max(...numbers);
console.log('Highest Number: ', highestNumber);

