/* eslint-disable */
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { assert, expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('validate the usage of the Utils function', function () {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');

    stub.callsFake(function () {
        return 10;
    });
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    spy.restore();
    stub.restore();

  });
});
