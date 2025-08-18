/**
 * Calculates the sum of two numbers after rounding them.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {string} type - Type of operation.
 * @returns {number} The sum of the rounded numbers.
 */
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
  return 'Error';
}

module.exports = calculateNumber;
