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
      it('round the first argument', () => {
        assert.equal(calculateNumber('DIVIDE', 10.0, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10.7, 2), 5.5);
      });
      it('round the second argument', () => {
        assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
        assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
        assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
      });
      it('should return the right number', () => {
        assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
        assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
        assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
        assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
        assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
      });
      it('should return Error if b is equal to 0', () => {
        assert.equal(calculateNumber('DIVIDE', 10.3, 0), 'Error');
        assert.equal(calculateNumber('DIVIDE', 10.7, 0), 'Error');
        assert.equal(calculateNumber('DIVIDE', 10.3, 0.3), 'Error');
        assert.equal(calculateNumber('DIVIDE', 10.7, 0.2), 'Error');
      });
    });
  });
});
