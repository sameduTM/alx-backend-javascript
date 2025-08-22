/* eslint-disable */
const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
  const url = 'http://localhost:7865';

  it('Correct status code', function (done) {
    request(url, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result', function(done) {
    request(url, (err, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other? Content-Type should be text/html', function (done) {
    request(url, (err, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

});

describe('test suite for the cart page', function () {

  it('Correct status code when :id is a number', function(done) {
    const cartUrl = 'http://localhost:7865/cart/12';
    request(cartUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is not a number', function(done) {
    const cartUrl = 'http://localhost:7865/cart/hello'; 
    request(cartUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct result when :id is a number', function(done) {
    const cartUrl = 'http://localhost:7865/cart/12';
    request(cartUrl, (err, res, body) => {
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status content-type when :id is not a number', function(done) {
    const cartUrl = 'http://localhost:7865/cart/hello'; 
    request(cartUrl, (err, res, body) => {
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });

});
