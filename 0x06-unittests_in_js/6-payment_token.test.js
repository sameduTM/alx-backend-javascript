/* eslint-disable */
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect, assert } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('test the result of getPaymentTokenFromAPI(true)', function(done) {
    getPaymentTokenFromAPI(true).then((response) => {
      console.log(response);
    }).then(done);
  })
})