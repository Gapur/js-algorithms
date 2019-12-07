const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
};

const factorialRecursive = (number) => (number > 1 ? number * factorialRecursive(number - 1) : 1);

module.exports = { factorial, factorialRecursive };
