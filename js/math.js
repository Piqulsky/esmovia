const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const factorial = (n) => {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const factorial_async = async (n) => {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * (await factorial_async(n - 1));
};
module.exports = { add, substract, factorial, factorial_async };
