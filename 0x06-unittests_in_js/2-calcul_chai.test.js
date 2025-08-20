/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('chai - test the function calculateNumber:', function () {
  describe('SUM', function () {
    it('should return the sum of a and b', function () {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('the first number is rounded up', function () {
      expect(calculateNumber('SUM', 1.7, 2)).to.equal(4);
    });
    it('the second number is rounded up', function () {
      expect(calculateNumber('SUM', 1, 2.7)).to.equal(4);
    });
    it('both numbers are rounded up', function () {
      expect(calculateNumber('SUM', 1.7, 2.7)).to.equal(5);
    });
    it('the first number is rounded down', function () {
      expect(calculateNumber('SUM', 1.2, 2)).to.equal(3);
    });
    it('the second number is rounded down', function () {
      expect(calculateNumber('SUM', 1, 2.2)).to.equal(3);
    });
    it('both numbers rounded down', function () {
      expect(calculateNumber('SUM', 1.2, 2.2)).to.equal(3);
    });
    it('return type should be number', function () {
      expect(calculateNumber('SUM', 1, 2)).to.be.a('number');
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of a and b', function () {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
    });
    it('the first number is rounded up', function () {
      expect(calculateNumber('SUBTRACT', 2.7, 1)).to.equal(2);
    });
    it('the second number is rounded up', function () {
      expect(calculateNumber('SUBTRACT', 2, 1.7)).to.equal(0);
    });
    it('both numbers are rounded up', function () {
      expect(calculateNumber('SUBTRACT', 2.7, 1.7)).to.equal(1);
    });
    it('the first number is rounded down', function () {
      expect(calculateNumber('SUBTRACT', 2.2, 1)).to.equal(1);
    });
    it('the second number is rounded down', function () {
      expect(calculateNumber('SUBTRACT', 2, 2.2)).to.equal(0);
    });
    it('both numbers rounded down', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 2.2)).to.equal(-1);
    });
    it('both numbers are negative', function() {
      expect(calculateNumber('SUBTRACT', -1, -2)).to.equal(1);
    });
    it('the first number is negative', function() {
      expect(calculateNumber('SUBTRACT', -2, 1)).to.equal(-3);
    });
    it('the second number is negative', function () {
      expect(calculateNumber('SUBTRACT', 2, -1)).to.equal(3);
    });
    it('return type should be number', function () {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.be.a('number');
    });
  });

  describe('DIVIDE', function () {
    it('should return quotient of a and b', function () {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });
    it('the first number is negative', function () {
      expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
    });
    it('the second number is negative', function () {
      expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
    });
    it('both numbers are negative', function () {
      expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
    });
    it('the second number is 0', function () {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });
    it('second number rounded down to zero', function () {
      expect(calculateNumber('DIVIDE', 2, 0.3)).to.equal('Error');
    });
    it('return type should be number', function () {
      expect(calculateNumber('DIVIDE', 1, 2)).to.be.a('number');
    });
    it('return type should be string if b == 0', function () {
      expect(calculateNumber('DIVIDE', 1, 0)).to.be.a('string');
    });
  });

  describe('EDGE CASES', function () {
    it('large numbers', function () {
      expect(calculateNumber('SUM', 1e9, 1e9)).to.equal(2000000000);
    });
    it('decimal just below rounding threshold', function () {
      expect(calculateNumber('SUM', 1.499, 2)).to.equal(3);
    });
    it('decimal just above rounding threshold', function () {
      expect(calculateNumber('SUM', 1.5, 2)).to.equal(4);
    });
  });
});
