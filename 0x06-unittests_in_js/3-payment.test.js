const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberSpy;

    beforeEach(() => {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });
    afterEach(() => {
        calculateNumberSpy.restore();
    });
    it('should call Utils.calculateNumber with correct arguments', () => {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(calculateNumberSpy);
        sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
    });
});

