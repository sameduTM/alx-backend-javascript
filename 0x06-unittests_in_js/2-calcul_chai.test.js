/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul.js');

describe('chai - test the function calculateNumber', function () {
    it('it should return the sum of a and b', function () {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        expect(calculateNumber('SUM', 1.7, 2)).to.equal(4);
        expect(calculateNumber('SUM', 1, 2.7)).to.equal(4);
        expect(calculateNumber('SUM', 1.7, 2.7)).to.equal(5);
        expect(calculateNumber('SUM', 1.2, 2)).to.equal(3);
        expect(calculateNumber('SUM', 1, 2.2)).to.equal(3);
        expect(calculateNumber('SUM', 1.2, 2.2)).to.equal(3);
        expect(calculateNumber('SUM', 1, 2)).to.be.a('number');
    });

    it('it should return the difference of a and b', function () {
        expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 2.7, 1)).to.equal(2);
        expect(calculateNumber('SUBTRACT', 2, 1.7)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 2.7, 1.7)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 2.2, 1)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 2, 2.2)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 1.2, 2.2)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', -1, -2)).to.equal(1);
        expect(calculateNumber('SUBTRACT', -2, 1)).to.equal(-3);
        expect(calculateNumber('SUBTRACT', 2, -1)).to.equal(3);
        expect(calculateNumber('SUBTRACT', 1, 2)).to.be.a('number');
    });

    it('it should return the division of a and b', function () {
        expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
        expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
        expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
        expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
        expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 2, 0.3)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 1, 2)).to.be.a('number');
        expect(calculateNumber('DIVIDE', 1, 0)).to.be.a('string');
    });
});
