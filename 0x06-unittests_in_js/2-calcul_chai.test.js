/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul');

describe('chai - test the function calculateNumber', function () {
    it('SUM', function () {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        expect(calculateNumber('SUM', 1.7, 2)).to.equal(4);
        expect(calculateNumber('SUM', 1, 2.7)).to.equal(4);
        expect(calculateNumber('SUM', 1.7, 2.7)).to.equal(5);
        expect(calculateNumber('SUM', 1.2, 2)).to.equal(3);
        expect(calculateNumber('SUM', 1, 2.2)).to.equal(3);
        expect(calculateNumber('SUM', 1.2, 2.2)).to.equal(3);
        expect(calculateNumber('SUM', 1, 2)).to.be.a('number');
    });
});
