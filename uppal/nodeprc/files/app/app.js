const { add, subtract, multiply, divide } = require('./index');

// console.log(add(1, 3));

const soluation = (a, b) => {
  add(a, b);
  subtract(a, b);
  multiply(a, b);
  divide(a, b);
};

soluation(3, 1);
