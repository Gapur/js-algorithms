const isPowerOfTwo = (number) => {
  // 1 (2^0) is the smallest power of two.
  if (number < 1) {
    return false;
  }

  // Let's find out if we can divide the number by two
  // many times without remainder.
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      // For every case when remainder isn't zero we can say that this number
      // couldn't be a result of power of two.
      return false;
    }

    dividedNumber /= 2;
  }

  return true;
};

const isPowerOfTwoBitwise = (number) => {
  // 1 (2^0) is the smallest power of two.
  if (number < 1) {
    return false;
  }

  /*
   * Powers of two in binary look like this:
   * 1: 0001
   * 2: 0010
   * 4: 0100
   * 8: 1000
   *
   * Note that there is always exactly 1 bit set. The only exception is with a signed integer.
   * e.g. An 8-bit signed integer with a value of -128 looks like:
   * 10000000
   *
   * So after checking that the number is greater than zero, we can use a clever little bit
   * hack to test that one and only one bit is set.
   */
  // eslint-disable-next-line no-bitwise
  return (number & (number - 1)) === 0;
};

module.exports = { isPowerOfTwo, isPowerOfTwoBitwise };
