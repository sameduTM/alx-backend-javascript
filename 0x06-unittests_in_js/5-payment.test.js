/* eslint-disable */
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const { expect, assert } = require('chai');

describe('calls sendPaymentRequestToApi with 100, and 200', function () {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spy.restore();
  });

  it('calls sendPaymentRequestToApi with 100, and 200', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith("The total is: 120")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it('calls sendPaymentRequestToApi with 10, and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith("The total is: 20")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
