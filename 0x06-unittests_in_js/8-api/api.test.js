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