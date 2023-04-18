// Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
// Take into account that the division must not allow 0 dividend
// The sum function allows an array as an input parameter and adds all its elements.
// The subtraction function allows an array as an input parameter and subtracts all its elements.
// Multiplication Function - Ditto
// The division function accepts two parameters: a and b.


const mathFunctions = {
    addition: (...numbers) => {
      return numbers.reduce((sum, num) => sum + num, 0);
    },
    subtraction: (...numbers) => {
      return numbers.reduce((difference, num) => difference - num);
    },
    multiplication: (...numbers) => {
      return numbers.reduce((product, num) => product * num, 1);
    },
    division: (a, b) => {
      if (b === 0) {
        throw new Error('Divide by zero error');
      }
      return a / b;
    }
};
