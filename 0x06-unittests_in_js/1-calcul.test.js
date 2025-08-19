/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test the function calculateNumber', function () {
  describe('test the SUM of the variables', function () {
    it('it should return the sum of a and b', function () {
        assert.equal(calculateNumber('SUM', 1, 2), 3);
      });
      it('the first number is rounded up', function () {
        assert.equal(calculateNumber('SUM', 1.7, 2), 4);
      });
      it('the second number is rounded up', function () {
        assert.equal(calculateNumber('SUM', 1, 2.7), 4);
      });
      it('both numbers are rounded up', function () {
        assert.equal(calculateNumber('SUM', 1.7, 2.7), 5);
      });
      it('the first number is rounded down', function () {
        assert.equal(calculateNumber('SUM', 1.2, 2), 3);
      });
      it('the second number is rounded down', function () {
        assert.equal(calculateNumber('SUM', 1, 2.2), 3);
      });
      it('both numbers rounded down', function () {
        assert.equal(calculateNumber('SUM', 1.2, 2,2), 3);
      });
  });
  describe('test the SUBTRACT operation', function () {
    it('it should return the sum of a and b', function () {
        assert.equal(calculateNumber('SUBTRACT', 2, 1), 1);
      });
      it('the first number is rounded up', function () {
        assert.equal(calculateNumber('SUBTRACT', 2.7, 1), 2);
      });
      it('the second number is rounded up', function () {
        assert.equal(calculateNumber('SUBTRACT', 2, 1.7), 0);
      });
      it('both numbers are rounded up', function () {
        assert.equal(calculateNumber('SUBTRACT', 2.7, 1.7), 1);
      });
      it('the first number is rounded down', function () {
        assert.equal(calculateNumber('SUBTRACT', 2.2, 2), 0);
      });
      it('the second number is rounded down', function () {
        assert.equal(calculateNumber('SUBTRACT', 2, 2.2), 0);
      });
      it('both numbers rounded down', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.2, 2.2), -1);
      });
      it('both numbers are negative', function() {
        assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
      });
      it('the first number is negative', function() {
        assert.equal(calculateNumber('SUBTRACT', -2, 1), -3);
      });
      it('the second number is negative', function () {
        assert.equal(calculateNumber('SUBTRACT', 2, -1), 3);
      });
  });
  describe('test the DIVIDE operation of the function', function () {
    it('it should return the sum of a and b', function () {
        assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
      });
      it('the first number is negative', function () {
        assert.equal(calculateNumber('DIVIDE', -4, 2), -2);
      });
      it('the second number is negative', function () {
        assert.equal(calculateNumber('DIVIDE', 4, -2), -2);
      });
      it('both numbers are negative', function () {
        assert.equal(calculateNumber('DIVIDE', -4, -2), 2);
      });
      it('the second number is 0', function () {
        assert.equal(calculateNumber('DIVIDE', 2, 0), 'Error');
      })
  });
});