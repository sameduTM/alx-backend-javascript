const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return the sum of rounded integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should handle rounding the first number up', () => {
      assert.strictEqual(calculateNumber('SUM', 1.7, 3), 5);
    });

    it('should handle rounding the second number up', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.8), 5);
    });

    it('should handle rounding both numbers up', () => {
      assert.strictEqual(calculateNumber('SUM', 1.7, 3.8), 6);
    });

    it('should handle rounding the first number down', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
    });

    it('should handle rounding the second number down', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.2), 4);
    });

    it('should handle rounding both numbers down', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.2), 4);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.8), -5);
    });

    it('should handle rounding half numbers up', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });
  });

  describe('subtract', () => {
    it('should return the difference of rounded integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });
    it('should handle rounding the first number up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 3), 1);
    });
    it('should handle rounding the second number up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.7), 1);
    });
    it('should handle rounding both the numbers up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.7), 2);
    });
    it('should handle rounding the first number down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.4, 3), 1);
    });
    it('should handle rounding the second number down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 3.4), 1);
    });
    it('should handle rounding both the numbers down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.4, 3.4), 1);
    });
    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.8, -1.8), -2);
    });

    describe('divide', () => {
      it('should return the division of rounded integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 1), 3);
    });

    it('should handle rounding the first number up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 2), 2);
    });

    it('should handle rounding the second number up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 1.8), 1);
    });

    it('should handle rounding both numbers up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 2.8), 2);
    });

    it('should handle rounding the first number down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle rounding the second number down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3.2), 2);
    });

    it('should handle rounding both numbers down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 2.2), 1);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.2, -2.4), 2.5);
    });

    it('should handle division by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
    });
  });
});
