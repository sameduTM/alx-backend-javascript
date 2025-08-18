const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should handle rounding the first number up', () => {
    assert.strictEqual(calculateNumber(1.7, 3), 5);
  });

  it('should handle rounding the second number up', () => {
    assert.strictEqual(calculateNumber(1, 3.8), 5);
  });

  it('should handle rounding both numbers up', () => {
    assert.strictEqual(calculateNumber(1.7, 3.8), 6);
  });

  it('should handle rounding the first number down', () => {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });

  it('should handle rounding the second number down', () => {
    assert.strictEqual(calculateNumber(1, 3.2), 4);
  });

  it('should handle rounding both numbers down', () => {
    assert.strictEqual(calculateNumber(1.2, 3.2), 4);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.8), -5);
  });

  it('should handle rounding half numbers up', () => {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });
});
