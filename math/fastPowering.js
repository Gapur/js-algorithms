const fastPowering = (base, power) => {
  if (power === 0) {
    // Anything that is raised to the power of zero is 1.
    return 1;
  }

  if (power % 2 === 0) {
    // If the power is even...
    // we may recursively redefine the result via twice smaller powers:
    // x^8 = x^4 * x^4.
    const multiplier = fastPowering(base, power / 2);
    return multiplier * multiplier;
  }

  // If the power is odd...
  // we may recursively redefine the result via twice smaller powers:
  // x^9 = x^4 * x^4 * x.
  const multiplier = fastPowering(base, Math.floor(power / 2));
  return multiplier * multiplier * base;
};

module.exports = fastPowering;
