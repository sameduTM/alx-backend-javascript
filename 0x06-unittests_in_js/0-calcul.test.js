/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('tests calculateNumber', function () {
  it('it should return the sum of a and b', function () {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('the first number is rounded up', function () {
    assert.equal(calculateNumber(1.7, 2), 4);
  });
  it('the second number is rounded up', function () {
    assert.equal(calculateNumber(1, 2.7), 4);
  });
  it('both numbers are rounded up', function () {
    assert.equal(calculateNumber(1.7, 2.7), 5);
  });
  it('the first number is rounded down', function () {
    assert.equal(calculateNumber(1.2, 2), 3);
  });
  it('the second number is rounded down', function () {
    assert.equal(calculateNumber(1, 2.2), 3);
  });
  it('both numbers rounded down', function () {
    assert.equal(calculateNumber(1.2, 2,2), 3);
  });
});
