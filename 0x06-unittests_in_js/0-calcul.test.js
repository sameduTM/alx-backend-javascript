const assert = require('assert');
const calculateNumber = require('../0-calcul');

describe('my suite', () => {
  describe('calculateNumber', () => {
    it('return -1 if result is false', () => {
      assert.equal(calculateNumber(1, 3), 4);
      assert.equal(calculateNumber(1, 3.7), 5);
      assert.equal(calculateNumber(1.2, 3.7), 5);
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
