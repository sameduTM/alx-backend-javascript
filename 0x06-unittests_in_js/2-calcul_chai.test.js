const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return the sum of rounded integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should handle rounding the first number up', () => {
      expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
    });

    it('should handle rounding the second number up', () => {
      expect(calculateNumber('SUM', 1, 3.8)).to.equal(5);
    });

    it('should handle rounding both numbers up', () => {
      expect(calculateNumber('SUM', 1.7, 3.8)).to.equal(6);
    });

    it('should handle rounding the first number down', () => {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });

    it('should handle rounding the second number down', () => {
      expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
    });

    it('should handle rounding both numbers down', () => {
      expect(calculateNumber('SUM', 1.2, 3.2)).to.equal(4);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.2, -3.8)).to.equal(-5);
    });

    it('should handle rounding half numbers up', () => {
      expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });
  });

  describe('subtract', () => {
    it('should return the difference of rounded integers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
    it('should handle rounding the first number up', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 3)).to.equal(1);
    });
    it('should handle rounding the second number up', () => {
      expect(calculateNumber('SUBTRACT', 3, 1.7)).to.equal(1);
    });
    it('should handle rounding both the numbers up', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1.7)).to.equal(2);
    });
    it('should handle rounding the first number down', () => {
      expect(calculateNumber('SUBTRACT', 4.4, 3)).to.equal(1);
    });
    it('should handle rounding the second number down', () => {
      expect(calculateNumber('SUBTRACT', 4, 3.4)).to.equal(1);
    });
    it('should handle rounding both the numbers down', () => {
      expect(calculateNumber('SUBTRACT', 4.4, 3.4)).to.equal(1);
    });
    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.8, -1.8)).to.equal(-2);
    });
    describe('divide', () => {
      it('it round the first argument', () => {
        expect(calculateNumber('DIVIDE', 10.0, 2)).to.equal(5);
        expect(calculateNumber('DIVIDE', 10.3, 2)).to.equal(5);
        expect(calculateNumber('DIVIDE', 10.7, 2)).to.equal(5.5);
    });
      it('it round the second argument', () => {
        expect(calculateNumber('DIVIDE', 10, 1.0)).to.equal(10);
        expect(calculateNumber('DIVIDE', 10, 1.3)).to.equal(10);
        expect(calculateNumber('DIVIDE', 10, 1.7)).to.equal(5);
    });
      it('it should return the right number', () => {
        expect(calculateNumber('DIVIDE', 10.3, 2)).to.equal(5);
        expect(calculateNumber('DIVIDE', 10, 1.2)).to.equal(10);
        expect(calculateNumber('DIVIDE', 10.3, 1.3)).to.equal(10);
        expect(calculateNumber('DIVIDE', 10.7, 1.2)).to.equal(11);
        expect(calculateNumber('DIVIDE', 10.3, 1.8)).to.equal(5);
        expect(calculateNumber('DIVIDE', 10.6, 1.8)).to.equal(5.5);
    });
      it('it should return Error if b is equal to 0', () => {
        expect(calculateNumber('DIVIDE', 10.3, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 10.7, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 10.3, 0.3)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 10.7, 0.2)).to.equal('Error');

      });
    });
  });
});
